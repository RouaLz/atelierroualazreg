import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAtelierRouaComponent } from './list-atelier-roua.component';

describe('ListAtelierRouaComponent', () => {
  let component: ListAtelierRouaComponent;
  let fixture: ComponentFixture<ListAtelierRouaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAtelierRouaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAtelierRouaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
