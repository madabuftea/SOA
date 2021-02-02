import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatSelectModule, MatButtonModule, MatCommonModule, MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
// import { ToastrModule } from 'ngx-toastr';
import { AuthDataStorage } from '../security/auth-data-storage';
// import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    // ToastrModule.forRoot()
  ],
  exports: [
    // ToastrModule,
    // HeaderComponent
  ],
  providers: [
    AuthDataStorage
  ]
})

export class SharedModule { }
