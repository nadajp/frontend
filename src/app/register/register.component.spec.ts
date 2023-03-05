import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

import { RegisterComponent } from './register.component';
import { Router } from '@angular/router';
import { of } from 'rxjs';

let userServiceStub = {
  token : 'token',
  registerUser() {
    return of( this.token );
  }
};

describe('RegisterComponent', () => {
  let component: RegisterComponent
  let fixture: ComponentFixture<RegisterComponent>
  const routerSpy = { navigate: jasmine.createSpy('navigate')}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [{provide: UserService, useValue: userServiceStub},
        { provide: Router, useValue: routerSpy }] 
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

  it('should register user and navigate to resources page', ()=> {
    component.onSubmit()
    expect(routerSpy.navigate).toHaveBeenCalledWith(['resources'])
  })
})
