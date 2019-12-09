import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './components/accountant/child/child.component';
import { GrandchildComponent } from './components/accountant/grandchild/grandchild.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import * as fromAaccountant from './components/accountant/accountant.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StoreModule.forRoot(reducers, {
    // metaReducers,
    // runtimeChecks: {
    // strictStateImmutability: true,
    // strictActionImmutability: true
    // }
    // })
    StoreModule.forRoot({ accountant: fromAaccountant.reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
