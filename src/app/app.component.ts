import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public env = environment;

  public appPages = [
    { title: 'Início', url: '/folder/home', icon: 'home' },
    { title: 'Sobre', url: '/folder/sobre', icon: 'information-circle' },
    { title: 'Contato', url: '/folder/contato', icon: 'chatbubbles' },
  ];
  constructor() {}
}
