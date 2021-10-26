import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaContentComponent } from './noticia-content.component';

describe('NoticiaContentComponent', () => {
  let component: NoticiaContentComponent;
  let fixture: ComponentFixture<NoticiaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiaContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
