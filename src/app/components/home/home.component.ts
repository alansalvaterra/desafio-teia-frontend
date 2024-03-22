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
  currentPage: number = 1;
  pageSize: number = 8; // Define o número de imagens por página

  constructor(
    private router: Router,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit() {
    this.favoritedImages = this.favoriteService.getFavoritedImages();
    this.updatePage();
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
    this.updatePage();
  }

  navigateToRandom() {
    this.router.navigate(['/randomselection']);
  }

  navigateToStandard(): void {
    this.router.navigate(['/standardselection']);
  }

  private updatePage() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.favoritedImagesChunks = this.chunkArray(this.favoritedImages.slice(startIndex, startIndex + this.pageSize), 4);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
      this.updatePage();
    }
  }

  totalPages(): number {
    return Math.ceil(this.favoritedImages.length / this.pageSize);
  }

  totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages() }, (_, index) => index + 1);
  }

  private chunkArray(array: any[], size: number): any[][] {
    const chunkedArray: any[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }

  downloadImage(image: ImageData) {
    window.open(image.url, '_blank');
  }

  clearFavorites() {
    this.favoritedImages = [];
  }
}
