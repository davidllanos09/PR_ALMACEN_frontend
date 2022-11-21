import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterBusinessComponent } from './views/users/register-business/register-business.component';
import { RegisterComponent } from './views/users/register/register.component';
import { SelectRegisterComponent } from './views/users/select-register/select-register.component';
import { AllWarehousesComponent } from './views/warehouses/all-warehouses/all-warehouses.component';
import { AsignarSeccionesComponent } from './views/warehouses/all-warehouses/asignar-secciones/asignar-secciones.component';
import { FormWarehouseComponent } from './views/warehouses/all-warehouses/form-warehouse.component';
import { RegisterProductComponent } from './views/warehouses/register-product/register-product.component';
import { ListProductsComponent } from './views/warehouses/list-products/list-products.component';

const routes: Routes = [
  {path: 'register_business', component: RegisterBusinessComponent},
  {path: 'register_user', component: RegisterComponent},
  {path: 'select_register', component: SelectRegisterComponent},
  {path: 'warehouse', component:AllWarehousesComponent},
  {path:'form', component:FormWarehouseComponent},
  {path:'form/:id', component:FormWarehouseComponent},
  {path:'asignar-secciones/:id', component: AsignarSeccionesComponent},
  {path: 'listar_productos', component: ListProductsComponent },
  {path:'producto', component:RegisterProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
