import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { FormbuilderComponent } from './components/formbuilder/formbuilder.component';

export const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'builders',
    component: FormbuilderComponent,
  },
];
