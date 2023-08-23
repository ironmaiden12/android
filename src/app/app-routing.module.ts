// app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    // canActivate: [AuthGuard] // Agregar el AuthGuard aquí
  },
  {
    path: 'promopage',
    loadChildren: () => import('./promopage/promopage.module').then( m => m.PromopagePageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'menupromociones',
    loadChildren: () => import('./menus/menupromociones/menupromociones.module').then( m => m.MenupromocionesPageModule)
  },
  {
    path: 'menucupones',
    loadChildren: () => import('./menus/menucupones/menucupones.module').then( m => m.MenucuponesPageModule)
  },
  {
    path: 'menulist',
    loadChildren: () => import('./menus/menulist/menulist.module').then( m => m.MenulistPageModule)
  },
  {
    path: 'consultapromociones',
    loadChildren: () => import('./consultapromociones/consultapromociones.module').then( m => m.ConsultapromocionesPageModule)
  },
  {
    path: 'ubicaciones',
    loadChildren: () => import('./menus/ubicaciones/ubicaciones.module').then( m => m.UbicacionesPageModule)
  },
  {
    path: 'tarjetaregalo',
    loadChildren: () => import('./menus/tarjetaregalo/tarjetaregalo.module').then( m => m.TarjetaregaloPageModule)
  },
  {
    path: 'update-modal',
    loadChildren: () => import('./update-modal/update-modal.module').then( m => m.UpdateModalPageModule)
  },
  {
    path: 'politicas',
    loadChildren: () => import('./menus/politicas/politicas.module').then( m => m.PoliticasPageModule)
  },
  {
    path: 'garantiasoporte',
    loadChildren: () => import('./menusconaccion/garantiasoporte/garantiasoporte.module').then( m => m.GarantiasoportePageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./menusconaccion/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'devoluciones',
    loadChildren: () => import('./menusconaccion/devoluciones/devoluciones.module').then( m => m.DevolucionesPageModule)
  },
  {
    path: 'ecommerce',
    loadChildren: () => import('./menusconaccion/ecommerce/ecommerce.module').then( m => m.EcommercePageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./menusconaccion/wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
