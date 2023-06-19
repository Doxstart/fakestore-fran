import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsForTestingNewComponent } from './pages/results-for-testing-new/results-for-testing-new.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: ResultsForTestingNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
