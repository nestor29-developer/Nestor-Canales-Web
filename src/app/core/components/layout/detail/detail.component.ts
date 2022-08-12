import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeObservable } from '../../home/home.observable';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  data: any;

  constructor(private homeObservable: HomeObservable, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.data = this.homeObservable.getDataResObs();
    if (!this.data) this.router.navigate(['/home']);
  }

  onGoBack() {
    this.router.navigate(['/home']);
  }
}
