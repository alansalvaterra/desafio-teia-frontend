import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-standard-selection',
  templateUrl: './standard-selection.component.html',
  styleUrls: ['./standard-selection.component.css']
})
export class StandardSelectionComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

}
