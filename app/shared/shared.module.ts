import {NgModule} from '@angular/core'
import {NavbarComponent} from './navbar/index'
import {SidebarComponent} from './sidebar/index'

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [NavbarComponent, SidebarComponent],
    exports: [NavbarComponent, SidebarComponent, CommonModule, FormsModule, RouterModule],
    imports: [CommonModule, FormsModule, RouterModule],
})
export class SharedModule{
    
}