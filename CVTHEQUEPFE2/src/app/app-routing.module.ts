import { NodataComponent } from './nodata/nodata.component';
import { ConseilcarriereComponent } from './conseilcarriere/conseilcarriere.component';
import { FindjobComponent } from './findjob/findjob.component';
import { ProfilComponent } from './profil/profil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilstaticComponent } from './profilstatic/profilstatic.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashbordclientComponent } from './dashbordclient/dashbordclient.component';
import { DashbodadminComponent } from './dashbodadmin/dashbodadmin.component';

const routes: Routes = [
  {
    path:'profil',component : ProfilComponent ,

  } ,
  {
    path :'findjob',component:FindjobComponent
  },
  {
    path :'conseilcarriere',component:ConseilcarriereComponent
  },
  {
    path :'nodatafo',component:NodataComponent
  },
  {
    path :'home',component:HomeComponent
  },

  {
    path :'Profilstatic',component:ProfilstaticComponent
  }
  ,

  {
    path :'contactus',component:ContactusComponent
  }
  ,

  {
    path :'dashbordadmin',component:DashbodadminComponent
  }
  ,

  {
    path :'dashbordclient',component:DashbordclientComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
