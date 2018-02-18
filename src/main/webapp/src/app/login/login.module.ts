// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

// This Module's Components
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule, 
        FormsModule,
        RouterModule
    ],
    declarations: [
        LoginComponent,
    ],
    exports: [
        LoginComponent,
    ]
})
export class LoginModule {

}
