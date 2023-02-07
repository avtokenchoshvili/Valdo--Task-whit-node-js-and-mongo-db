import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizessComponent } from './quizess.component';

describe('QuizComponent', () => {
  let component: QuizessComponent;
  let fixture: ComponentFixture<QuizessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
