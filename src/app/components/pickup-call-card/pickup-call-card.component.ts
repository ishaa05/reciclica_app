import { Component, OnInit } from '@angular/core';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { hourglassOutline } from 'ionicons/icons';
import { add } from 'ionicons/icons';
import { addIcons } from "ionicons";
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-pickup-call-card',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
  imports: [IonicModule]
})
export class PickupCallCardComponent  implements OnInit {
  public title = 'PickupCallCard';
  constructor() { 
    addIcons({ hourglassOutline,add });
  }

  ngOnInit() {}

}
