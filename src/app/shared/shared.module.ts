import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { SharedRoutingModule } from './shared-routing.module';
import { Overlay } from '@angular/cdk/overlay';
import { MAT_MENU_SCROLL_STRATEGY } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    SharedRoutingModule,
    MatDividerModule,
    TranslateModule,
  ],
  exports: [NavBarComponent],
  providers: [
    {
      provide: MAT_MENU_SCROLL_STRATEGY,
      useFactory: (overlay: Overlay) => () =>
        overlay.scrollStrategies.reposition(),
      deps: [Overlay],
    },
  ],
})
export class SharedModule {}
