import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewArchiveComponent } from './user-view-archive.component';

describe('UserViewArchiveComponent', () => {
  let component: UserViewArchiveComponent;
  let fixture: ComponentFixture<UserViewArchiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserViewArchiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
