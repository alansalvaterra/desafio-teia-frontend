import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FavoriteService } from 'src/app/services/favorite-service.service';

export interface ImageData {
  albumId: number;
  id: number;
  title: string;
  imageUrl: string;
  thumbnailUrl: string;
  url: string;
  favorite?: boolean;
}

@Component({
  selector: 'app-random-selection',
  templateUrl: './random-selection.component.html',
  styleUrls: ['./random-selection.component.css']
})
export class RandomSelectionComponent implements OnInit { // Implemente a interface OnInit
  numberOfImages: number = 0;
  imageSize: string = 'small';
  randomImages: ImageData[] = [];
  randomImagesChunks: ImageData[][] = [];
  selectedImage: ImageData | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private favoriteService: FavoriteService // Injete o serviço
  ) { }

  ngOnInit() {
    this.getRandomImages(); // Chame a função para carregar as imagens quando o componente for inicializado
  }

  getRandomImages() {
    if (this.numberOfImages && this.numberOfImages > 0) {
      const randomIds: number[] = this.generateRandomIds(this.numberOfImages, 5000);
      const requests: Observable<ImageData | undefined>[] = randomIds.map(id =>
        this.http.get<ImageData>(`https://jsonplaceholder.typicode.com/photos/${id}`)
          .pipe(
            catchError(() => of(undefined))
          )
      );

      Promise.all(requests.map(request => request.toPromise())).then((responses: (ImageData | undefined)[]) => {
        const validResponses = responses.filter(response => response !== undefined) as ImageData[];
        this.randomImages = validResponses.map(response => ({
          albumId: response.albumId,
          id: response.id,
          title: response.title,
          imageUrl: this.imageSize === 'small' ? response.thumbnailUrl : response.url,
          thumbnailUrl: response.thumbnailUrl,
          url: response.url,
          favorite: false // Inicialmente, nenhuma imagem é favorita
        }));

        // Divide as imagens em pedaços de 4
        this.randomImagesChunks = this.chunkArray(this.randomImages, 4);
      });
    }
  }

  toggleFavorite(image: ImageData) {
    image.favorite = !image.favorite; // Inverte o estado de favorito da imagem
    this.favoriteService.toggleFavorite(image); // Chama a função do serviço para atualizar a lista de favoritos
  }

  generateRandomIds(amount: number, maxId: number): number[] {
    const randomIds: number[] = [];
    while (randomIds.length < amount) {
      const randomId = Math.floor(Math.random() * maxId) + 1;
      if (!randomIds.includes(randomId)) {
        randomIds.push(randomId);
      }
    }
    return randomIds;
  }

  chunkArray(array: any[], size: number): any[][] {
    const chunkedArray: any[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }

  toggleImageSize(image: ImageData) {
    this.selectedImage = this.selectedImage === image ? null : image;
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  showImageDetails(image: ImageData) {
    this.selectedImage = image;
  }

  hideImageDetails() {
    this.selectedImage = null;
  }
}
