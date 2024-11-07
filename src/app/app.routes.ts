import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
    path:"Lapino",
    component:MenuComponent
    },
    {
        path:"cart",
        component:CartComponent
    },{
        path:"",
        component:HomeComponent

    }

];
