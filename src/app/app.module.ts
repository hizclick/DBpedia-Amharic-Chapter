import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { QueryDataComponent } from './query-data/query-data.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from './shared/shared.module';
import { AboutProjectComponent } from './about-project/about-project.component';
import { DocumentationSectionComponent } from './documentation-section/documentation-section.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ResourcesComponent } from './resources/resources.component';
import { SiteContainerComponent } from './site-container/site-container.component';
import { ContactUsContainerComponent } from './contact-us-container/contact-us-container.component';
import { NgChartsModule } from 'ng2-charts';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { CustomTranslateLoader } from './translation-service/translation-loader';

@NgModule({
  declarations: [
    AppComponent,
    QueryDataComponent,
    AboutProjectComponent,
    DocumentationSectionComponent,
    ResourcesComponent,
    SiteContainerComponent,
    ContactUsContainerComponent,
    
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule,
    NgChartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

