import { Component } from '@angular/core';
import { ScoutService } from '../scout.service';
import { Scout } from '../scout.model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
  providers: [ScoutService]
})

export class MasterComponent {

  constructor(private scoutService: ScoutService) { }

  submitForm(name: string, rank: string, age: number, description: string, url: string) {
    var newScout: Scout = new Scout(name, rank, age, description, url);
    this.scoutService.addScout(newScout);
  }

}
