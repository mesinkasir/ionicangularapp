import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";
import { SwiperModule } from "swiper/angular";
import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { CodePage } from "../pages/code/code";
import { GalleryPage } from "../pages/gallery/gallery";
import { TabsPage } from "../pages/tabs/tabs";
import { AppRoutingModule } from "./app-routing.module";
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    GalleryPage,
    CodePage,
    TabsPage
  ],
  imports: [BrowserModule, SwiperModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    GalleryPage,
    CodePage,
    TabsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule {}
