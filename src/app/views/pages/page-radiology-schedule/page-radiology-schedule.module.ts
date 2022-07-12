import { ModalCancelAppointmentModule } from './../../widgets/modal-cancel-appointment/modal-cancel-appointment.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRadiologyScheduleComponent } from './page-radiology-schedule.component';

import { SectionHeaderModule } from '../../sections/section-header/section-header.module';
import { SectionSidebarModule } from '../../sections/section-sidebar/section-sidebar.module';
import { SectionFooterModule } from '../../sections/section-footer/section-footer.module';
import { PageRadiologyScheduleRoutingModule } from './page-radiology-schedule-routing.module';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { FormsModule } from '@angular/forms';
import { ModalCancelAppointmentComponent } from '../../widgets/modal-cancel-appointment/modal-cancel-appointment.component';

@NgModule({
  declarations: [PageRadiologyScheduleComponent],
  imports: [
    CommonModule,
    PageRadiologyScheduleRoutingModule,
    SectionHeaderModule,
    SectionSidebarModule,
    SectionFooterModule,
    NgxDaterangepickerMd.forRoot(),
    FormsModule,
    ModalCancelAppointmentModule
  ],
  exports: [
    PageRadiologyScheduleComponent
  ],
  entryComponents: [
    ModalCancelAppointmentComponent
  ],
})
export class PageRadiologyScheduleModule { }
