import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtTableComponent } from './art-table.component';

describe('ArtTableComponent', () => {
  let component: ArtTableComponent;
  let fixture: ComponentFixture<ArtTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
