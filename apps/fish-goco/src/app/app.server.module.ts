import { AppComponent } from "apps/fish-goco/src/app/app.component";
import { AppModule } from "apps/fish-goco/src/app/app.module";
import { NgModule } from "@angular/core";
import { ServerModule } from '@angular/platform-server';

@NgModule({
  imports: [
    AppModule,
    ServerModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
