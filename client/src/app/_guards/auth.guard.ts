import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const toaster = inject(ToastrService);
  const router = inject(Router);

  return accountService.currentUser$.pipe(
    map(user => {
      if (user) return true;
      else {
        router.navigateByUrl("/");
        toaster.error("no puedes ingresar a esta pagina");
        return false;
      }
    }

    )
  )
};
