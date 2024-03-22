import { Injectable } from '@angular/core';
import { ImageData } from '../components/random-selection/random-selection.component';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favoritedImages: ImageData[] = [];

  constructor() {}

  addFavorite(image: ImageData) {
    this.favoritedImages.push(image);
    image.favorite = true;
  }

  removeFavorite(image: ImageData) {
    const index = this.favoritedImages.findIndex(img => img.id === image.id);
    if (index !== -1) {
      this.favoritedImages.splice(index, 1);
      image.favorite = false;
    }
  }

  isFavorite(image: ImageData): boolean {
    return this.favoritedImages.some(img => img.id === image.id);
  }

  toggleFavorite(image: ImageData) {
    if (this.isFavorite(image)) {
      this.removeFavorite(image);
    } else {
      this.addFavorite(image);
    }
  }

  getFavoritedImages(): ImageData[] {
    return this.favoritedImages;
  }

  clearFavorites() {
    this.favoritedImages = [];
  }
}
