import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedeletecomponentComponent } from './updatedeletecomponent.component';

describe('UpdatedeletecomponentComponent', () => {
  let component: UpdatedeletecomponentComponent;
  let fixture: ComponentFixture<UpdatedeletecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedeletecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedeletecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
