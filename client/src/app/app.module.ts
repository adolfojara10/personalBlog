import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
    ShowBiographyComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
