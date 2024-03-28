import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { BiographyComponent } from './biography/biography.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { ListProjectComponent } from './projects/list-project/list-project.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { ShowProjectComponent } from './projects/show-project/show-project.component';
import { ShowPostComponent } from './show-post/show-post.component';
import { ShowBiographyComponent } from './show-biography/show-biography.component';
import { ToastrModule } from 'ngx-toastr';
import { TestErrorComponent } from './errors/test-error/test-error.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { PostCardComponent } from './post-card/post-card.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { ShowPostSelectedComponent } from './show-post-selected/show-post-selected.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ShowProjectSelectedComponent } from './projects/show-project-selected/show-project-selected.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    CreatePostComponent,
    ListPostComponent,
    EditPostComponent,
    BiographyComponent,
    CreateProjectComponent,
    ListProjectComponent,
    EditProjectComponent,
    ShowProjectComponent,
    ShowPostComponent,
    ShowBiographyComponent,
    TestErrorComponent,
    NotFoundComponent,
    ServerErrorComponent,
    PostCardComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
