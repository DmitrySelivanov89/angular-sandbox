import { inject } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { exhaustMap, filter, mergeMap, pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { User } from './user';
import { UserService } from './user.service';
import { HttpErrorResponse } from '@angular/common/module.d-CnjH8Dlt';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserCardComponent, UserCardDialogData } from '../components/user-card/user-card.component';
import { MatDialog } from '@angular/material/dialog';

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
  withMethods(
    (store, userService = inject(UserService), snackBar = inject(MatSnackBar), dialog = inject(MatDialog)) => ({
      loadUsers: rxMethod<void>(
        pipe(
          tap(() => patchState(store, { loading: true, error: undefined })),
          switchMap(() => {
            return userService.getUsers().pipe(
              tapResponse({
                next: (users) => patchState(store, { users, loading: false }),
                error: (error: HttpErrorResponse) => patchState(store, { error: error.message, loading: false }),
              })
            );
          })
        )
      ),
      loadUser: rxMethod<number>(
        pipe(
          tap(() => patchState(store, { loading: true, error: undefined })),
          switchMap((id) => {
            return userService.getUser(id).pipe(
              tapResponse({
                next: (selectedUser) => patchState(store, { selectedUser, loading: false }),
                error: (error: HttpErrorResponse) => patchState(store, { error: error.message, loading: false }),
              })
            );
          })
        )
      ),
      createUser: rxMethod<Omit<User, 'id'>>(
        pipe(
          tap(() => patchState(store, { loading: true, error: undefined })),
          exhaustMap((post) => {
            return userService.createUser(post).pipe(
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
          })
        )
      ),
      updateUser: rxMethod<User>(
        pipe(
          switchMap((user) => {
            return dialog
              .open(UserCardComponent, {
                data: { user } as UserCardDialogData,
              })
              .afterClosed()
              .pipe(
                filter(Boolean),
                mergeMap((post) => {
                  return userService.updateUser(post).pipe(
                    tapResponse({
                      next: (updatedUser) => {
                        patchState(store, {
                          users: store.users().map((u) => (u.id === updatedUser.id ? updatedUser : u)),
                          loading: false,
                        });
                        snackBar.open('User successfully updated!');
                      },
                      error: (error: HttpErrorResponse) => patchState(store, { error: error.message, loading: false }),
                    })
                  );
                })
              );
          })
        )
      ),
      deleteUser: rxMethod<number>(
        pipe(
          tap(() => patchState(store, { loading: true, error: undefined })),
          exhaustMap((id) => {
            return userService.deleteUser(id).pipe(
              tapResponse({
                next: () => {
                  patchState(store, {
                    users: store.users().filter((user) => user.id !== id),
                    loading: false,
                  });
                  snackBar.open('User successfully deleted!');
                },
                error: (error: HttpErrorResponse) => patchState(store, { error: error.message, loading: false }),
              })
            );
          })
        )
      ),
      selectUser: (selectedUser: User) => patchState(store, { selectedUser }),
      clearSelectedUser: () => patchState(store, { selectedUser: undefined }),
    })
  ),
  withHooks({
    onInit(store) {
      store.loadUsers();
    },
  })
);
