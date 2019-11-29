import { ApiServiceService } from './services/api-service/api-service.service';
import { LoginComponent } from './components/login/login.component';
import { MoveTodoComponent } from './components/move-todo/move-todo.component';
import { EventEmitterService } from './services/event-emitter/event-emitter.service';
import { ManageGroupComponent } from './components/manage-group/manage-group.component';
import { CreateTodoComponent } from './components/create-todo/create-todo.component';
import { EditScheduleComponent } from './components/edit-schedule/edit-schedule.component';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { CreateSceduleComponent } from './components/create-schedule/create-scedule.component';
import { DetailPopoverComponent } from './components/detail-popover/detail-popover.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [
    DetailPopoverComponent,
     CreateSceduleComponent,
      EditScheduleComponent,
       CreateTodoComponent,
       ManageGroupComponent,
       MoveTodoComponent,
       LoginComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalStorageService,
    EventEmitterService,
    ApiServiceService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
