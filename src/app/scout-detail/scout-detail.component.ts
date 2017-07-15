import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Scout } from '../scout.model';
import { ScoutService } from '../scout.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-scout-detail',
  templateUrl: './scout-detail.component.html',
  styleUrls: ['./scout-detail.component.css'],
  providers: [ScoutService]
})

export class ScoutDetailComponent implements OnInit {
  scoutId: string;
  scoutToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private scoutService: ScoutService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.scoutId = urlParameters['id'];
   });
   this.scoutToDisplay = this.scoutService.getScoutById(this.scoutId);
  }
}
