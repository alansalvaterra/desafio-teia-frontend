import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FavoriteService } from 'src/app/services/favorite-service.service';
import { ImageData } from '../random-selection/random-selection.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  favoritedImages: ImageData[] = [];
  favoritedImagesChunks: ImageData[][] = [];

  constructor(
    private router: Router,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {
    this.favoritedImages = this.favoriteService.getFavoritedImages();
    this.favoritedImagesChunks = this.chunkArray(this.favoritedImages, 4);
  }

  toggleFavorite(image: ImageData) {
    if (image.favorite) {
      this.favoriteService.removeFavorite(image);
    } else {
      this.favoriteService.addFavorite(image);
    }
    image.favorite = !image.favorite;
  }

  removeFavorite(image: ImageData) {
    this.favoriteService.removeFavorite(image);
    this.favoritedImages = this.favoriteService.getFavoritedImages();
    this.favoritedImagesChunks = this.chunkArray(this.favoritedImages, 4);
  }

  navigateToRandom() {
    this.router.navigate(['/randomselection']);
  }

  navigateToSelection(): void {
    this.router.navigate(['/selection']);
  }

  private chunkArray(array: any[], size: number): any[][] {
    const chunkedArray: any[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }
}
