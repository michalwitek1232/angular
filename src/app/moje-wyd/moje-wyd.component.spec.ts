/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MojeWydComponent } from './moje-wyd.component';

describe('MojeWydComponent', () => {
  let component: MojeWydComponent;
  let fixture: ComponentFixture<MojeWydComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojeWydComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojeWydComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
