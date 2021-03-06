import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MediaListComponent } from './media-list/media-list.component';
import { MediaComponent } from './media/media.component';
import { ProfileComponent } from './profile/profile.component';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { FollowersComponent} from './followers/followers.component';

const CALLBACK_PATH = 'implicit/callback';

const routes: Routes = [
  {path:  '', pathMatch:  'full', redirectTo:  'login'},
  {path: 'login', component: LoginComponent },
  { path: 'media', component: MediaListComponent},
  {path: 'home', component: HomeComponent },
  {path: 'profile', component: ProfileComponent},
  { path: 'media/:id', component: MediaComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'followers', component: FollowersComponent},
  {path: CALLBACK_PATH, component: OktaCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
