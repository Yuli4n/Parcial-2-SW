import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../cursos.service';
import { cursoDetail } from '../cursoDetail';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {

  cursoid!:string;
  @Input() cursoDetail!: cursoDetail; 

  constructor(private route: ActivatedRoute ,private cursosService: CursosService) { }

  getCurso(){
    this.cursosService.getCurso(this.cursoid).subscribe(cada_curso=>{
      this.cursoDetail = cada_curso;
    })
  }

  ngOnInit() {
    if (this.cursoDetail == undefined){
      this.cursoid = this.route.snapshot.paramMap.get('id')!
      if (this.cursoid) {
        this.getCurso();
      }
    }
    console.log('Datos del cursoDetail:', this.cursoDetail);
  }

}
