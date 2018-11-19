import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaEquipesPage } from './lista-equipes';

@NgModule({
  declarations: [
    ListaEquipesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaEquipesPage),
  ],
})
export class ListaEquipesPageModule {}
