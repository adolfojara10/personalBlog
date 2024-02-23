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

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "",
    runGuardsAndResolvers: "always",
    canActivate: [authGuard],
    children:
      [
        { path: "create-post", component: CreatePostComponent },
        { path: "list-post", component: ListPostComponent },
        { path: "edit-post", component: EditPostComponent },
        { path: "biography", component: BiographyComponent },
        { path: "create-project", component: CreateProjectComponent },
        { path: "list-project", component: ListProjectComponent },
        { path: "edit-project", component: EditProjectComponent }
      ]
  },
  { path: "ingeniero/49789/login", component: LoginComponent },
  { path: "show-project", component: ShowProjectComponent },
  { path: "show-post", component: ShowPostComponent },
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
