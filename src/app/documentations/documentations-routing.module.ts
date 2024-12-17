import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DocumentationLayoutComponent } from './documentation-layout/documentation-layout.component';
import { SparqlForBeginnersDocumentationComponent } from './documentations/sparql-for-beginners-documentation.component';
import { QueryAmharicDbpediaDocumentationComponent } from './documentations/query-amharic-dbpedia-documentation';
import { RunningDIEFDocumentationComponent } from './documentations/running-dief-extractor-documentation';

const routes: Routes = [
  {
    path: '',
    component: DocumentationLayoutComponent, // Main layout component with sidenav
    children: [
      {
        path: 'sparql-for-beginners',
        component: SparqlForBeginnersDocumentationComponent,
      },
      {
        path: 'query-am-dbpedia',
        component: QueryAmharicDbpediaDocumentationComponent,
      },
      {
        path: 'running-dief-extractor',
        component: RunningDIEFDocumentationComponent,
      },
      // { path: '', component: DocumentationsComponent }, // Default or option 2
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentationsRoutingModule {}
