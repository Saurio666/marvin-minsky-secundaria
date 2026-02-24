import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenericContentComponent } from './generic-content/generic-content.component';
import { ProfileComponent } from './profile/profile.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contenido', component: GenericContentComponent},
    { path: 'perfil', component: ProfileComponent},
    { path: '**', component: UnderConstructionComponent}
];

export const routing = RouterModule.forRoot(routes);