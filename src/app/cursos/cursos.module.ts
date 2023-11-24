import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosListarComponent } from './cursos-listar/cursos-listar.component';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent, CursosListarComponent, CursoDetailComponent],
  exports:[CursosListarComponent, CursoDetailComponent]
})
export class CursosModule { }
