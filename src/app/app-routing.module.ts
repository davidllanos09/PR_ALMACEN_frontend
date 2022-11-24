import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterBusinessComponent } from './views/users/register-business/register-business.component';
import { RegisterComponent } from './views/users/register/register.component';
import { SelectRegisterComponent } from './views/users/select-register/select-register.component';
import { AllWarehousesComponent } from './views/warehouses/all-warehouses/all-warehouses.component';
import { AsignarSeccionesComponent } from './views/warehouses/all-warehouses/asignar-secciones/asignar-secciones.component';
import { FormWarehouseComponent } from './views/warehouses/all-warehouses/form-warehouse.component';
import { RegisterProductComponent } from './views/warehouses/register-product/register-product.component';
import { SectionsComponent } from './views/warehouses/Sections/sections.component';
import { FormSectionComponent } from './views/warehouses/Sections/form-section.component';
import { AssignRacksComponent } from './views/warehouses/Sections/asign-racks/assign-racks.component';
import { ListProductsComponent } from './views/warehouses/list-products/list-products.component';
import { RacksComponent } from './views/warehouses/racks/racks.component';
import { FormRackComponent } from './views/warehouses/racks/form-rack.component';
import { AsignarProductosComponent } from './views/warehouses/racks/asignar-productos/asignar-productos.component';

const routes: Routes = [
  {path: 'register_business', component: RegisterBusinessComponent},
  {path: 'register_user', component: RegisterComponent},
  {path: 'select_register', component: SelectRegisterComponent},
  
  {path: 'warehouse', component:AllWarehousesComponent},
  {path:'form', component:FormWarehouseComponent},
  {path:'form/:id', component:FormWarehouseComponent},
  {path:'asignar-secciones/:id', component: AsignarSeccionesComponent},
  
  {path:'seccion', component:SectionsComponent},
  {path:'formSection', component:FormSectionComponent},
  {path:'formSection/:id', component:FormSectionComponent},
  {path:'assign-racks/:id', component: AssignRacksComponent},

  {path: 'listar_productos', component: ListProductsComponent },
  {path:'producto', component:RegisterProductComponent},
  {path:'producto/:id', component:RegisterProductComponent},

  {path:'rack', component:RacksComponent},
  {path:'formRack', component:FormRackComponent},
  {path:'formRack/:id', component:FormRackComponent},
  {path:'asignar-producto/:id', component:AsignarProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
