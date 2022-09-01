import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-home',
  templateUrl: './center-home.component.html',
  styleUrls: ['./center-home.component.scss']
})
export class CenterHomeComponent implements OnInit {
  users: any[] = [
    {
      id: 2,
      name: 'Joni Destan',
      img1: '../../assets/images/us.png',
      img2: '../../assets/images/ss.jpg',
    },
    {
      id: 3,
      name: 'Ryana Wilyam',
      img1: '../../assets/images/us2.png',
      img2: '../../assets/images/ss2.jpg',
    },
    {
      id: 4,
      name: 'Justen Deep',
      img1: '../../assets/images/us3.png',
      img2: '../../assets/images/ss3.jpg',
    },
    {
      id: 5,
      name: 'Lewando Wisky',
      img1: '../../assets/images/us4.png',
      img2: '../../assets/images/ss4.jpg',
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
