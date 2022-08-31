import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AboutComponent } from './Components/Routing/about/about.component';
import { ProfileComponent } from './Components/Routing/profile/profile.component';
import { ErrorComponent } from './Components/Routing/error/error.component';
import { HeaderComponent } from './Components/Routing/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DemoService } from './Services/demo.service';
import { AddComponent } from './Components/add/add.component';
import { HomeComponent } from './Components/Routing/home/home.component';
import { PostDetailsComponent } from './Components/Routing/post-details/post-details.component';
import { PostsComponent } from './Components/Routing/posts/posts.component';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: 'posts/update/:userId/:id', component: UpdateComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'addPost', component: AddComponent },

  { path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [
    AppComponent,

    AboutComponent,
    ProfileComponent,
    ErrorComponent,
    HeaderComponent,
    AddComponent,
    PostDetailsComponent,
    PostsComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  providers: [
    /**Services */
    DemoService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
