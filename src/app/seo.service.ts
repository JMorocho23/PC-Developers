import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private meta: Meta) { }

  generateTags(config){
    config = {
      title: 'PC Developers: Desarrollo Digital | Cuenca-Ecuador.',
      description: 'PC Developers es una empresa de desarrollo digital en Cuenca. Nuestra pasión es diseñar paginas web para nuestros clientes.',
      image: 'https://pcdevelopers-4e0ce.firebaseapp.com/assets/logopag-01.png',
      slug: '',
      ...config
    }

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image'});
    this.meta.updateTag({ name: 'twitter:site', content: '@pc_developers'});
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image});

    this.meta.updateTag({ name: 'og:type', content: 'business.business'});
    this.meta.updateTag({ name: 'og:site_name', content: 'PC Developers'});
    this.meta.updateTag({ name: 'og:title', content: config.title });
    this.meta.updateTag({ name: 'og:description', content: config.description});
    this.meta.updateTag({ name: 'og:image', content: config.image });
    this.meta.updateTag({ name: 'og:url', content: 'https://pc-developers.com/'});


  }
    
}
