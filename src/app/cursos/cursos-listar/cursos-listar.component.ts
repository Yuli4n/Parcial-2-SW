import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';
import { cursoDetail } from '../cursoDetail';

@Component({
  selector: 'app-cursos-listar',
  templateUrl: './cursos-listar.component.html',
  styleUrls: ['./cursos-listar.component.css']
})
export class CursosListarComponent implements OnInit {

  constructor(private cursoService: CursosService) { }

  cursos: Array<Curso> = [];
  certificados: string="Los cursos que ofrecen ceritificado son: ";
  selectedCurso!: cursoDetail;
  selected: boolean = false;

  getCursos(){
    
    this.cursoService.getCursos().subscribe(all_cursos =>{
      this.cursos=all_cursos;
      this.certificados+=this.getCertificados(all_cursos);
    })
  }

  getCertificados(all_cursos: Curso[]):string{
    let rta:string="";
    for (let i=0; i<all_cursos.length;i++){
      let curso: Curso= all_cursos[i];
      if (curso.offers_certificate){
        rta+=curso.id+", "
      }
    }
    return rta;
  }

  onSelected(curso: cursoDetail): void {
    this.selected = true;
    this.selectedCurso = curso;
  }

  ngOnInit() {
    this.getCursos();
  }

}
