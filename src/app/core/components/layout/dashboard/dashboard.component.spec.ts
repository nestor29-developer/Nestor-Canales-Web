import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { ApiService } from 'src/app/shared/services/api.service';
import { PostsService } from 'src/app/shared/services/posts.service';
import { HomeObservable } from '../../home/home.observable';

import { DashboardComponent } from './dashboard.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let postsService: PostsService;
  const postMock: any = {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architectoy',
  };

  let httpMock: HttpTestingController;
  let injector: TestBed;
  let fb: FormBuilder = new FormBuilder();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [FormBuilder, HomeObservable, ApiService, PostsService],
      imports: [
        RouterTestingModule.withRoutes([]),
        MatSnackBarModule,
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    postsService = TestBed.inject(PostsService);

    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getPost method should return data', () => {
    postsService.getPost(1).subscribe((res: any) => {
      expect(res).toEqual(postMock);
    });

    const req = httpMock.expectOne('http://localhost:3000/posts/1');
    expect(req.request.method).toBe('GET');
    req.flush(postMock);
  });

  it('should render label', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.mat-form')?.textContent).toContain(
      'Enter ID'
    );
  });

  it('should call the isNumberKey method', () => {
    const comp = new DashboardComponent(
      fb,
      {} as any,
      {} as any,
      {} as any,
      {} as any
    );
    expect(comp.isNumberKey(2)).toBe(true);
  });
});
