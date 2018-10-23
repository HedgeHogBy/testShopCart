import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { CatalogItemComponent } from '../catalog-item/catalog-item.component';
import { CatalogGridComponent } from './catalog-grid.component';
import {APP_CONFIG, APP_DI_CONFIG} from '../../app-config.module';

describe('CatalogGridComponent', () => {
  let component: CatalogGridComponent;
  let fixture: ComponentFixture<CatalogGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: APP_CONFIG,
          useValue: APP_DI_CONFIG
        }
      ],
      declarations: [ CatalogGridComponent, CatalogItemComponent ],
      imports: [NgbPaginationModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
