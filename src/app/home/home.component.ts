import { Component }  from '@angular/core';
import { Auth }       from '../../services/auth.service';

@Component({
  selector: 'page-main',
  styleUrls: ['../app.component.css'],
  templateUrl: 'home.component.html'
})

export class HomeComponent {
  constructor(private auth: Auth) {}
};