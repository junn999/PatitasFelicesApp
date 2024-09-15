import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-formmascotaperdida',
  templateUrl: './formmascotaperdida.page.html',
  styleUrls: ['./formmascotaperdida.page.scss'],
})
export class FormmascotaperdidaPage {

  constructor(public photoService: PhotoService) { }

    async addPhotoToGallery() {
      await this.photoService.addNewToGallery();
  }

}
