import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-restraunt',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './restraunt.component.html',
  styleUrl: './restraunt.component.css'
})
export class RestrauntComponent {

}
