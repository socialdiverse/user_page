import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupSuggestComponent } from './group-suggest.component';

describe('GroupSuggestComponent', () => {
  let component: GroupSuggestComponent;
  let fixture: ComponentFixture<GroupSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupSuggestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
