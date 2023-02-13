import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './COMPONENTES/inicio/inicio.component';
import { AgregarComponent } from './COMPONENTES/agregar/agregar.component';
import {HttpClientModule} from "@angular/common/http"
import {FormsModule} from "@angular/forms"

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { PrivadoComponent } from './COMPONENTES/privado/privado.component';
import { PublicoComponent } from './COMPONENTES/publico/publico.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarComponent,
    PrivadoComponent,
    PublicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthModule.forRoot({
      domain: 'dev-v07ok8s8c2nhivu5.us.auth0.com',
      clientId: 'NDxgbpAk4KfirHZWJh6TtczsnyxZ2a26',
      authorizationParams: {
        redirect_uri: window.location.origin
      },
      cacheLocation: "localstorage",
      useRefreshTokens: true
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
