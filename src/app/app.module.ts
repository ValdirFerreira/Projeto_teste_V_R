import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './pages/home/guards/auth-guard.service';
import { HTTPStatus, LoaderInterceptor } from './interceptor/loader.interceptor';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { Session } from './pages/home/guards/session';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TraducaoService } from './services/traducao-service';

const RxJS = [LoaderInterceptor, HTTPStatus];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgSelectModule,
    NgxFileDropModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    CommonModule,
    TranslateModule
  ],
  providers: [
    AuthGuard,
    RxJS,
    Session,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },

   

  ],
  bootstrap: [AppComponent]
  , schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }


export function HttpLoaderFactory(http: HttpClient) {
  return new TraducaoService(http);
}