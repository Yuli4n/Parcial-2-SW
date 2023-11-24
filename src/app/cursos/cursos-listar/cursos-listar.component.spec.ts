/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CursosListarComponent } from './cursos-listar.component';

describe('CursosListarComponent', () => {
  let component: CursosListarComponent;
  let fixture: ComponentFixture<CursosListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
