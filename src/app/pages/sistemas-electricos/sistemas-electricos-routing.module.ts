
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SistemasElectricosComponent } from './sistemas-electricos.component';

const routes: Routes = [
    { path: '', component: SistemasElectricosComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SistemasElectricosRoutingModule {}