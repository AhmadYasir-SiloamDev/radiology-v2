import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PageLoginRoutingModule } from './page-login-routing.module';
import { PageLoginComponent } from './page-login.component';
import { WidgetLoginComponent} from '../../widgets/widget-login/widget-login.component';
import { SectionHeaderModule } from '../../sections/section-header/section-header.module';
import { SectionSidebarModule } from '../../sections/section-sidebar/section-sidebar.module';
import { SectionFooterModule } from '../../sections/section-footer/section-footer.module';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalChangePasswordComponent } from './../../widgets/modal-change-password/modal-change-password.component';
import { ModalChangePasswordModule } from '../../widgets/modal-change-password/modal-change-password.module';

@NgModule({
  declarations: [
    PageLoginComponent,
    WidgetLoginComponent,
  ],
  imports: [
    CommonModule,
    PageLoginRoutingModule,
    FormsModule,
    SectionHeaderModule,
    SectionSidebarModule,
    SectionFooterModule,
    NgbAlertModule,
    ModalChangePasswordModule
  ],
  entryComponents: [
    ModalChangePasswordComponent
  ],
})
export class PageLoginModule { }
