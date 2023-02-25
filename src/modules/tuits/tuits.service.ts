import { Injectable, NotFoundException } from '@nestjs/common';
import { Tuit } from './tuit.entity';
import { CreateTuitDto } from './dto/create-tuit.dto';
import { UpdateTuitDto } from './dto/update-tuit.dto';

@Injectable()
export class TuitsService {
  private tuits: Tuit[] = [
    {
      id: '1',
      message: 'Hello world from Nest.js',
    },
  ];
  //RETORNAR NUESTRA COLECCION
  getTuits(): Tuit[] {
    return this.tuits;
  }
  getTuit(id: string): Tuit {
    const tuit = this.tuits.find((item) => item.id === id);
    if (!tuit) {
      throw new NotFoundException('No se encuentra el id we');
    }
    return tuit;
  }
  //VA A RECIBIR UN MENSAJE DE TIPO STRING Y VA A CREAR UN ID RANDOM ENTRE 1 Y 2000 Y SE LO ASIGNA A ID
  createTuit({ message }: CreateTuitDto) {
    this.tuits.push({
      id: (Math.floor(Math.random() * 2000) + 1).toString(),
      message,
    });
  }
  //Busca el tuit segun ID, actualiza la propiedad message y lo retorna
  UpdateTuit(id: string, { message }: UpdateTuitDto) {
    const tuit: Tuit = this.getTuit(id);
    tuit.message = message;
    return tuit;
  }
  //RECIBE UN ID Y BUSCA EL INDEX EN LA COLECCION Y LO REMUEVE AUTOMATICAMENTE
  removeTuit(id: string) {
    const index = this.tuits.findIndex((tuit) => tuit.id === id);
    if (index >= 0) {
      this.tuits.splice(index, 1);
    }
  }
}
