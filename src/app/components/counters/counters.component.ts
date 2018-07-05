import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent implements OnInit {
  
  private wowSubscription: Subscription;
  counto:any;
  counto1:any;
  counto2:any;

  constructor(private router: Router, private wowService: NgwWowService) {
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      // Reload WoW animations when done navigating to page,
      // but you are free to call it whenever/wherever you like
      
      this.wowService.init(); 
    });
      
 
   }

   ngOnInit() {
    // you can subscribe to WOW observable to react when an element is revealed
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item:HTMLElement) => {
        // do whatever you want with revealed element
        
      });
  }
 
  ngOnDestroy() {
    // unsubscribe (if necessary) to WOW observable to prevent memory leaks
    this.wowSubscription.unsubscribe();
  }

}
