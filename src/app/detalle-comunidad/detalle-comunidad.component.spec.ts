import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleComunidadComponent } from './detalle-comunidad.component';

describe('DetalleComunidadComponent', () => {
  let component: DetalleComunidadComponent;
  let fixture: ComponentFixture<DetalleComunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleComunidadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleComunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
