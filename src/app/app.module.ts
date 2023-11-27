import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';
import { loggedInGuard } from './logged-in.guard';
import { routes as childRoutes, ProductsModule } from './products/products.module';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path:'cotactus', redirectTo: 'contact'},
  { path: 'login', component: LoginComponent},
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [loggedInGuard]

  },
  {
    path: 'products',
    component: ProductsComponent,
    children: childRoutes
  }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProtectedComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
