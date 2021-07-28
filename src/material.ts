import { NgModule } from "@angular/core";
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
    imports:[
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ],
    exports:[
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ]

})export class Material {}