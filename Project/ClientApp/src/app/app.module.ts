import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CamereComponent } from './camera/camera.component';
import { CameraAddComponent } from './camera/camera-add.component';
import { CameraUpdateComponent } from './camera/camera-update.component';
import { ClientiComponent } from './client/client.component';
import { ClientAddComponent } from './client/client-add.component';
import { ClientUpdateComponent } from './client/client-update.component';
import { AngajatiComponent } from './angajat/angajat.component';
import { AngajatAddComponent } from './angajat/angajat-add.component';
import { AngajatUpdateComponent } from './angajat/angajat-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ClientiComponent,
    ClientAddComponent,
    ClientUpdateComponent,
    AngajatiComponent,
    AngajatAddComponent,
    AngajatUpdateComponent,
    CamereComponent,
    CameraAddComponent,
    CameraUpdateComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'camere', component: CamereComponent },
      { path: 'camera-add', component: CameraAddComponent },
      { path: 'camera-update', component: AngajatUpdateComponent },
      { path: 'clienti', component: ClientiComponent },
      { path: 'client-add', component: ClientAddComponent },
      { path: 'client-update', component: ClientUpdateComponent },
      { path: 'angajati', component: AngajatiComponent },
      { path: 'angajat-add', component: AngajatAddComponent },
      { path: 'angajat-update', component: AngajatUpdateComponent },
    ], { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
