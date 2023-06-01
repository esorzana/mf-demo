import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManfredTmpComponent } from './manfred-tmp.component';

describe('ManfredTmpComponent', () => {
  let component: ManfredTmpComponent;
  let fixture: ComponentFixture<ManfredTmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManfredTmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManfredTmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
