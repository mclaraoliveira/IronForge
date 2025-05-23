import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewChampion1Page } from './new-champion-1.page';

describe('NewChampion1Page', () => {
  let component: NewChampion1Page;
  let fixture: ComponentFixture<NewChampion1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChampion1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
