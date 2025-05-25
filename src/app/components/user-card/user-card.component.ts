import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../services/user';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

export interface UserCardDialogData {
  user: User;
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatFormField,
    MatInput,
    MatFormField,
    MatLabel,
    FormsModule,
  ],
})
export class UserCardComponent {
  private readonly dialogRef = inject(MatDialogRef);
  private readonly dialogData = inject<UserCardDialogData>(MAT_DIALOG_DATA);

  user = this.dialogData.user;

  closeDialog(): void {
    this.dialogRef.close(this.user);
  }

  // readonly isValid = signal(false);

  //  nameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  //   const value = control.value;
  //   if (!value) return { required: true };
  //   if (value.length < 2) return { minlength: true };
  //   return null;
  // };

  //  phoneValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  //   const value = control.value;
  //   if (!value) return { required: true };
  //   if (!/^\+?[\d\s-]{10,}$/.test(value)) return { pattern: true };
  //   return null;
  // };

  //  websiteValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  //   if (!control.value) return { required: true };
  //   return null;
  // };

  // validateForm = (name: string, phone: string, website: string) => {
  //   const isNameValid = Boolean(name && name.length >= 2);
  //   const isPhoneValid = Boolean(phone && /^\+?[\d\s-]{10,}$/.test(phone));
  //   const isWebsiteValid = Boolean(website);
  //
  //   this.isValid.set(isNameValid && isPhoneValid && isWebsiteValid);
  // };

  // updateErrorMessage(phone: string): void {
  //   if (!phone) {
  //     this.errorMessage.set('Phone number is required');
  //   } else if (!/^\+?[\d\s-]{10,}$/.test(phone)) {
  //     this.errorMessage.set('Please enter a valid phone number');
  //   } else {
  //     this.errorMessage.set('');
  //   }
  // }
}
