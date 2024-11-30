import { Component } from '@angular/core';
import { add } from '../../store/tab-store.action';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item-overview',
  standalone: true,
  imports: [ButtonModule, TableModule],
  templateUrl: './item-overview.component.html',
  styleUrl: './item-overview.component.scss'
})
export class ItemOverviewComponent {

  constructor(
    private store: Store,
    private http: HttpClient) {
  }

  public teste() {
    this.store.dispatch(add({ tab: 'teste' }));
  }

  data = [{
    id: 'teste',
    sku: '1234'
  }];
}
