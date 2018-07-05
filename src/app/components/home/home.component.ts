import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../seo.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private seo: SeoService) { }

  ngOnInit() {
    this.seo.generateTags({
      title: 'PC Developers: Desarrollo Digital | Cuenca-Ecuador.',
      description: 'PC Developers es una empresa de desarrollo digital en Cuenca.',
      image: 'https://pc-developers.com/assets/logo2.png',
    })
  }

}
