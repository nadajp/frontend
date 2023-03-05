import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

const userServiceStub = {
  login() {
    const token = [{token: 1}];
    return of( token );
  }
};

const routerSpy = { navigate: jasmine.createSpy('navigate')}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      providers: [{provide: UserService, useValue: userServiceStub},
        { provide: Router, useValue: routerSpy }] 
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should login user and navigate to resources page', ()=> {
    component.onSubmit()
    expect(routerSpy.navigate).toHaveBeenCalledWith(['resources'])
  })
});
