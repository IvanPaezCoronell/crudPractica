import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  { path: 'listUser', component: ListUserComponent },
  { path: 'createUser', component: CreateUserComponent },
  { path: 'updateUser/:id', component: UpdateUserComponent },
  { path: '', redirectTo: 'listUser', pathMatch: 'full' },
  { path: '**', redirectTo: 'listUser', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
