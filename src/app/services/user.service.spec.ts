import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { HttpClient } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  let httpSpy: Spy<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService,
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }]
    });

    service = TestBed.inject(UserService);
    httpSpy = TestBed.inject<any>(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register a new user', (done: DoneFn) => {
    const mockUser = {
       email: 'eve.holt@reqres.in',
       password : 'pistol'
    }
    const mockResponse = "{id: '4', token: 'QpwL5tke4Pnpja7X4'}";

    httpSpy.post.and.nextWith(mockResponse)
    service.registerUser(mockUser).subscribe(
      data => {
        expect(data).toEqual(mockResponse);
        done();
      })
    expect(httpSpy.post.calls.count()).toBe(1);
  });

  it('should login a user', (done: DoneFn) => {
    const mockUser = {
       email: 'eve.holt@reqres.in',
       password : 'pistol'
    }
    const mockResponse = "{token: 'QpwL5tke4Pnpja7X4'}";

    httpSpy.post.and.nextWith(mockResponse)
    service.login(mockUser).subscribe(
      data => {
        expect(data).toEqual(mockResponse);
        done();
      })
    expect(httpSpy.post.calls.count()).toBe(1);
  });
});
