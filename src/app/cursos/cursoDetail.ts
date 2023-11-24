import { Curso } from './curso'

export class cursoDetail extends Curso{
    
    public constructor(id:number, title: string, platform: string, launch_year: number, offers_certificate: boolean,description: string, image:string, duration_hours: number){
        super(id,title,platform,launch_year,offers_certificate,description,image,duration_hours);
    }
    }
    