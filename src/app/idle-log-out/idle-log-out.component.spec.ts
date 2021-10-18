import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdleLogOutComponent } from './idle-log-out.component';

describe('IdleLogOutComponent', () => {
  let component: IdleLogOutComponent;
  let fixture: ComponentFixture<IdleLogOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdleLogOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdleLogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
