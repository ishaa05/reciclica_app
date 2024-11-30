import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { addIcons } from "ionicons";
import { hourglassOutline } from 'ionicons/icons';
import { archiveOutline } from 'ionicons/icons';
import { checkmarkCircleOutline } from 'ionicons/icons';
import { trophy } from 'ionicons/icons';
@Component({
  selector: 'app-pickup-calls',
  templateUrl: './pickup-calls.page.html',
  styleUrls: ['./pickup-calls.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PickupCallsPage implements OnInit {
  public title = 'PickupCallComponent';
  constructor() { 
    addIcons({ hourglassOutline,archiveOutline,checkmarkCircleOutline,trophy});
  }

  ngOnInit() {
    
  }

}
