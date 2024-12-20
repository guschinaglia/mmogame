import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabmenuComponent } from './tabmenu.component';

describe('TabmenuComponent', () => {
  let component: TabmenuComponent;
  let fixture: ComponentFixture<TabmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
