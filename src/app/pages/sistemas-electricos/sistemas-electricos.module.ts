import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SistemasElectricosComponent } from './sistemas-electricos.component';
import { SistemasElectricosRoutingModule } from './sistemas-electricos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [SistemasElectricosComponent],
    imports: [CommonModule, SistemasElectricosRoutingModule, FormsModule, ReactiveFormsModule]
})
export class SistemasElectricosModule {}