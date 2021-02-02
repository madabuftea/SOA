import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { TokenInterceptor } from './security/token-interceptor';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatChipsModule, MatIconModule, MatExpansionModule, MatTabsModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { EventComponent } from './components/event/event.component';
import { AdminEventComponent, EventAddDialog } from './components/admin-event/admin-event.component';
import {MatDialogModule} from '@angular/material';
import { AuthGuard } from './security/guards/auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventComponent,
    AdminEventComponent,
    EventAddDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatExpansionModule,
    TextFieldModule,
    MatTabsModule,
    MatDialogModule
  ],
  exports: [
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    AuthGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [EventAddDialog]
})
export class AppModule { }
