import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export interface ImageData {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  imageSize: 'pequeno' | 'grande';
}

@Component({
  selector: 'app-standard-selection',
  templateUrl: './standard-selection.component.html',
  styleUrls: ['./standard-selection.component.css']
})
export class StandardSelectionComponent implements OnInit {
  imageId: number | null = null;
  imageSize: 'pequeno' | 'grande' = 'pequeno';
  selectedImage: ImageData | null = null;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getImageById() {
    if (this.imageId !== null && this.imageId >= 1 && this.imageId <= 5000) {
      this.http.get<ImageData>(`https://jsonplaceholder.typicode.com/photos/${this.imageId}`)
        .subscribe(
          (imageData: ImageData) => {
            this.selectedImage = { ...imageData, imageSize: this.imageSize };
          },
          (error) => {
            console.error('Erro ao buscar imagem:', error);
            this.selectedImage = null;
          }
        );
    } else {
      this.selectedImage = null;
      console.error('ID fora do intervalo (1 a 5000)');
    }
  }

  onSizeChange(event: any) {
    this.imageSize = event.target.value;
    if (this.selectedImage) {
      this.selectedImage.imageSize = this.imageSize;
    }
  }

  getImageUrl(): string {
    if (this.selectedImage) {
      return this.selectedImage.imageSize === 'grande' ? this.selectedImage.url : this.selectedImage.thumbnailUrl ?? '';
    }
    return '';
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
}
