import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', redirectTo: 'material-form-feild', pathMatch: 'full'},
    {path: 'material-form-feild', loadComponent: () => import('./material/form-field/form-field.component').then(mod => mod.FormFieldComponent)},
    {path: 'chase-form-feild', loadComponent: () => import('./chase/chase-form-feild/chase-form-feild.component').then(mod => mod.ChaseFormFeildComponent)},
];
