import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

import { RestrauntComponent } from '../restraunt/restraunt.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,RestrauntComponent,FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
