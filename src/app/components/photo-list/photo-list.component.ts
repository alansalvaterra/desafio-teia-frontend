import { ApiService } from './../../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit {

  photos: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getPhotos().subscribe((data: any[]) => {
      this.photos = data;
    });
  }
}
