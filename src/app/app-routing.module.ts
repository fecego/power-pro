import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { CartComponent } from './cart/cart.component';
import { TiendaComponent } from './tienda/tienda.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { FrequentQuestionComponent } from './frequent-question/frequent-question.component';
import { AboutusComponent} from './aboutus/aboutus.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HistorialComponent } from './historial/historial.component';
import { MapaSitioComponent } from './mapa-sitio/mapa-sitio.component';
import { PagosComponent } from './pagos/pagos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PoliticsComponent } from './politics/politics.component';
import { RegistroDireccionesComponent} from './registro-direcciones/registro-direcciones.component';
import { UbicacionesComponent} from './ubicaciones/ubicaciones.component';
import { VerifyAccountComponent} from './verify-account/verify-account.component';
import { SecondClickComponent } from './second-click/second-click.component';




const routes: Routes = [
  {path: 'inicio', component: InicioComponent}, 
  {path:'categorias/:categoria', component: SecondClickComponent},
 
  {path: 'lista-deseos', component: WishListComponent},
  {path: 'carrito', component: CartComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'tienda/:id/:nombre', component: ProductDetailsComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'contacto', component: ContactComponent},
  {path: 'preguntas-frecuentes', component: FrequentQuestionComponent},
  {path: 'sobre-nosotros', component: AboutusComponent}, 
  {path: 'olvidaste-contraseña', component: ForgetPasswordComponent },
  {path: 'historial-compras', component: HistorialComponent },
  {path: 'pagos', component: PagosComponent},
  {path: 'politicas', component: PoliticsComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'mapa-sitio', component: MapaSitioComponent},
  {path: 'registro-direcciones', component: RegistroDireccionesComponent },
  {path: 'ubicaciones', component: UbicacionesComponent},
  {path: 'verificacion-cuenta', component: VerifyAccountComponent},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}, 
  {path: '**', component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }

 export const routingComponents = [
      InicioComponent, HeaderComponent, RegisterComponent, RegistroDireccionesComponent, TiendaComponent, FrequentQuestionComponent, ForgetPasswordComponent, UbicacionesComponent , SecondClickComponent, ContactComponent, FooterComponent,LoginComponent, VerifyAccountComponent,CartComponent, WishListComponent  
 ]
