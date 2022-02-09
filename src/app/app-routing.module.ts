import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VenueComponent } from './venue/venue.component';
import { LocationsComponent } from './locations/locations.component';


const routes: Routes = [

  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "venue", component: VenueComponent},
  {path: "locations", component: LocationsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
