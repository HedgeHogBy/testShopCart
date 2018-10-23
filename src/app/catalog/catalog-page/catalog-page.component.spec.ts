import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { CatalogItemComponent } from '../catalog-item/catalog-item.component';
import { CatalogGridComponent } from '../catalog-grid/catalog-grid.component';
import { CatalogPageComponent } from './catalog-page.component';
import {APP_CONFIG, APP_DI_CONFIG} from '../../app-config.module';


describe('CatalogPageComponent', () => {
  let component: CatalogPageComponent;
  let fixture: ComponentFixture<CatalogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: APP_CONFIG,
          useValue: APP_DI_CONFIG
        }
      ],
      declarations: [ CatalogPageComponent, CatalogGridComponent, CatalogItemComponent ],
      imports: [HttpClientTestingModule, NgbPaginationModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
