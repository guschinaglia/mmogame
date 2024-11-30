import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { TabmenuComponent } from './components/tabmenu/tabmenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Button, SidebarModule, TabmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  sidebarVisible: boolean = false;
}
