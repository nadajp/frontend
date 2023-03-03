import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';

import { RegisterComponent } from './register.component';
import { Router } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent
  let fixture: ComponentFixture<RegisterComponent>
  let routerSpy = jasmine.createSpyObj('Router', ['navigate'])
  const userServiceSpy = jasmine.createSpyObj('UserService', ['registerUser']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [{provide: UserService, useValue: userServiceSpy}, {
        provide: Router, useValue: routerSpy} 
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();   
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
