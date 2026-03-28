import { Routes } from '@angular/router';
import { Home } from './layout/home/home';
import { Projects } from './layout/projects/projects';
import { Contact } from './layout/contact/contact';
import { AboutMe } from './layout/about-me/about-me';

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'about-me', component: AboutMe},
    {path: 'projects', component: Projects},
    {path: 'contact', component: Contact},

    {path: '**', redirectTo: '/home'}
];
