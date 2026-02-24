import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericContentComponent } from './generic-content.component';

describe('GenericContentComponent', () => {
  let component: GenericContentComponent;
  let fixture: ComponentFixture<GenericContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenericContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
