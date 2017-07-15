import { Component, OnInit } from '@angular/core';
import { Scout } from '../scout.model';
import { Router } from '@angular/router';
import { ScoutService } from '../scout.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-scouts',
  templateUrl: './scouts.component.html',
  styleUrls: ['./scouts.component.css'],
  providers: [ScoutService]
})

export class ScoutsComponent implements OnInit {
  scouts: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private scoutService: ScoutService){}

  ngOnInit(){
    this.scouts = this.scoutService.getScouts();
  }

  goToDetailPage(clickedScout) {
    this.router.navigate(['scouts', clickedScout.$key]);
  };
}
