import { NgModule } from "@angular/core";
import{MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon'
@NgModule({
imports:[
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
],
exports:[
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
]
})
export class Material {}