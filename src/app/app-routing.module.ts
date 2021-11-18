import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { AboutComponent } from './components/pages/about/about.component';
import { BlogdetailsComponent } from './components/pages/blogdetails/blogdetails.component';
import { BloggridComponent } from './components/pages/bloggrid/bloggrid.component';
import { BloglistComponent } from './components/pages/bloglist/bloglist.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HometwoComponent } from './components/pages/hometwo/hometwo.component';
import { ProductsingleComponent } from './components/pages/productsingle/productsingle.component';
import { ProjectdetailsComponent } from './components/pages/projectdetails/projectdetails.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { WishlistComponent } from './components/pages/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', component: HometwoComponent, data: { breadcrumb: 'Homepage' } },
  {
    path: 'home-v2',
    component: HometwoComponent,
    data: { breadcrumb: 'Homepage' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { breadcrumb: 'About Us' },
  },
  {
    path: 'blog-grid',
    component: BloggridComponent,
    data: { breadcrumb: 'Blog Grid' },
  },
  {
    path: 'blog-list',
    component: BloglistComponent,
    data: { breadcrumb: 'Blog List' },
  },
  {
    path: 'blog-details',
    component: BlogdetailsComponent,
    data: { breadcrumb: 'Blog Details' },
  },
  { path: 'shop', component: ShopComponent, data: { breadcrumb: 'Shop' } },
  {
    path: 'product-single',
    component: ProductsingleComponent,
    data: { breadcrumb: 'Product Single' },
  },
  { path: 'cart', component: CartComponent, data: { breadcrumb: 'Cart' } },
  {
    path: 'checkout',
    component: CheckoutComponent,
    data: { breadcrumb: 'Checkout' },
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    data: { breadcrumb: 'Wishlist' },
  },
  {
    path: 'services',
    component: ServiceComponent,
    data: { breadcrumb: 'Services' },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { breadcrumb: 'Projects' },
  },
  {
    path: 'project-details',
    component: ProjectdetailsComponent,
    data: { breadcrumb: 'Project Details' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { breadcrumb: 'Contact Us' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
