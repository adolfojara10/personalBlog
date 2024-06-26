import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListPostComponent } from './list-post/list-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { BiographyComponent } from './biography/biography.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { ListProjectComponent } from './projects/list-project/list-project.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { ShowProjectComponent } from './projects/show-project/show-project.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { ShowBiographyComponent } from './show-biography/show-biography.component';
import { authGuard } from './_guards/auth.guard';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { ShowPostSelectedComponent } from './show-post-selected/show-post-selected.component';
import { ShowProjectSelectedComponent } from './projects/show-project-selected/show-project-selected.component';
import { preventUnsavedChangesGuardGuard } from './_guards/prevent-unsaved-changes-guard.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [authGuard],
    children:
      [
        { path: "create-post", component: CreatePostComponent },
        { path: "list-post", component: ShowPostComponent },
        { path: "edit-post/:id", component: EditPostComponent, canDeactivate: [preventUnsavedChangesGuardGuard] },
        { path: "biography", component: BiographyComponent },
        { path: "create-project", component: CreateProjectComponent },
        { path: "list-project", component: ShowProjectComponent },
        { path: "edit-project/:id", component: EditProjectComponent }
      ]
  },
  { path: "ingeniero/49789/login", component: LoginComponent },
  { path: "show-project", component: ShowProjectComponent },
  { path: "show-project/:id", component: ShowProjectSelectedComponent },
  { path: "show-post", component: ShowPostComponent },
  { path: "show-post/:id", component: ShowPostSelectedComponent },
  { path: "show-biography", component: ShowBiographyComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "server-error", component: ServerErrorComponent },
  { path: "**", component: NotFoundComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
