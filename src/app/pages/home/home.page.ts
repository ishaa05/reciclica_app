import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { hourglassOutline } from 'ionicons/icons';
import { add } from 'ionicons/icons';
import { addIcons } from "ionicons";
import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonicModule,PickupCallCardComponent]
})
export class HomePage implements OnInit {

  constructor() {
    addIcons({ hourglassOutline,add });
   }

  ngOnInit() {
       HomePage
       PickupCallCardComponent;
  }

}



