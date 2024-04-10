import { CanDeactivateFn } from '@angular/router';
import { EditPostComponent } from '../edit-post/edit-post.component';

export const preventUnsavedChangesGuardGuard: CanDeactivateFn<EditPostComponent> = (component) => {
  if (component.editForm?.dirty){
    return (confirm("Are you sure you want to continue? Any unsaved changes will be lost"));
  }
  return true;
};
