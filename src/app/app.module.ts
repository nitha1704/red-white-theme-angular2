import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbModule } from 'angular-crumbs';
import { NgwWowModule } from 'ngx-wow';
import { Ng5SliderModule } from 'ng5-slider'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HometwoComponent } from './components/pages/hometwo/hometwo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BloglistComponent } from './components/pages/bloglist/bloglist.component';
import { BloggridComponent } from './components/pages/bloggrid/bloggrid.component';
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProductsingleComponent } from './components/pages/productsingle/productsingle.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectdetailsComponent } from './components/pages/projectdetails/projectdetails.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { WishlistComponent } from './components/pages/wishlist/wishlist.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { CanvasComponent } from './components/layouts/canvas/canvas.component';
import { MobilemenuComponent } from './components/layouts/mobilemenu/mobilemenu.component';
import { MenuComponent } from './components/layouts/menu/menu.component';
import { PaginationComponent } from './components/layouts/pagination/pagination.component';
import { BreadcrumbComponent } from './components/layouts/breadcrumb/breadcrumb.component';
import { SmallmenuComponent } from './components/layouts/smallmenu/smallmenu.component';
import { QuickviewComponent } from './components/layouts/quickview/quickview.component';
import { BlogsidebarComponent } from './components/layouts/blogsidebar/blogsidebar.component';
import { ShopsidebarComponent } from './components/layouts/shopsidebar/shopsidebar.component';
import { ClientsComponent } from './components/layouts/clients/clients.component';
import { FavprojectsComponent } from './components/layouts/favprojects/favprojects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HometwoComponent,
    AboutComponent,
    BloglistComponent,
    BloggridComponent,
    BlogdetailsComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    ProductsingleComponent,
    ProjectsComponent,
    ProjectdetailsComponent,
    ServiceComponent,
    ShopComponent,
    WishlistComponent,
    HeaderComponent,
    FooterComponent,
    CanvasComponent,
    MobilemenuComponent,
    MenuComponent,
    PaginationComponent,
    BreadcrumbComponent,
    SmallmenuComponent,
    QuickviewComponent,
    BlogsidebarComponent,
    ShopsidebarComponent,
    ClientsComponent,
    FavprojectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    BreadcrumbModule,
    NgwWowModule,
    NgbModule,
    Ng5SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
