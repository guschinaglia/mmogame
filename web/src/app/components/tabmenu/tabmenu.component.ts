import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { StoreModule } from '@ngrx/store';
import { tabStoreReduce } from '../../store/tab-store.reduce';

@Component({
  selector: 'app-tabmenu',
  standalone: true,
  imports: [
    TabMenuModule
  ],
  templateUrl: './tabmenu.component.html',
  styleUrl: './tabmenu.component.scss'
})
export class TabmenuComponent implements OnInit {

  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Dashboard', icon: 'pi pi-home' },
      { label: 'Transactions', icon: 'pi pi-chart-line' },
      { label: 'Products', icon: 'pi pi-list' }
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
}
