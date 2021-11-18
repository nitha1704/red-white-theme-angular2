import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavprojectsComponent } from './favprojects.component';

describe('FavprojectsComponent', () => {
  let component: FavprojectsComponent;
  let fixture: ComponentFixture<FavprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavprojectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
