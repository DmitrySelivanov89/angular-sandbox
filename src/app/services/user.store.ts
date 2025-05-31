import { inject } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { User } from './user';
import { UserService } from './user.service';
import { HttpErrorResponse } from '@angular/common/http';

type UsersState = {
  readonly users: User[];
  readonly loading: boolean;
  readonly error: string | undefined;
  readonly selectedUser: User | undefined;
};

const initialState: UsersState = {
  users: [],
  loading: false,
  error: undefined,
  selectedUser: undefined,
};

export const UserStore = signalStore(
  withState<UsersState>(initialState),
  withMethods((store, userService = inject(UserService)) => ({
    loadUsers: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap(() =>
          userService.getUsers().pipe(
            tapResponse({
              next: (users) => patchState(store, { users, loading: false }),
              error: (error: HttpErrorResponse) => patchState(store, { error: error.message, loading: false }),
            })
          )
        )
      )
    ),
    loadUser: rxMethod<number>(
      pipe(
        tap(() => patchState(store, { loading: true })),
        switchMap((id) =>
          userService.getUser(id).pipe(
            tapResponse({
              next: (selectedUser) => patchState(store, { selectedUser, loading: false }),
              error: (error: HttpErrorResponse) => patchState(store, { error: error.message, loading: false }),
            })
          )
        )
      )
    ),
    createUser(newUser: Omit<User, 'id'>) {
      return userService.createUser(newUser).pipe(
        tapResponse({
          next: (createdPost) => {
            patchState(store, {
              users: [...store.users(), createdPost],
              loading: false,
            });
          },
          error: (error: HttpErrorResponse) => patchState(store, { error: error.message, loading: false }),
        })
      );
    },
    updateUser(updatedUser: User) {
      return userService.updateUser(updatedUser).pipe(
        tapResponse({
          next: (updatedUser) => {
            patchState(store, {
              users: store.users().map((u) => (u.id === updatedUser.id ? updatedUser : u)),
              loading: false,
            });
          },
          error: (error: HttpErrorResponse) => patchState(store, { error: error.message, loading: false }),
        })
      );
    },
    deleteUser(id: User['id']) {
      return userService.deleteUser(id).pipe(
        tapResponse({
          next: () => {
            patchState(store, {
              users: store.users().filter((user) => user.id !== id),
              loading: false,
            });
          },
          error: (error: HttpErrorResponse) => patchState(store, { error: error.message, loading: false }),
        })
      );
    },
    selectUser: (selectedUser: User) => patchState(store, { selectedUser }),
    clearSelectedUser: () => patchState(store, { selectedUser: undefined }),
  })),
  withHooks({
    onInit(store) {
      store.loadUsers();
    },
  })
);
