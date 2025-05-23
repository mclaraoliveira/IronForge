import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-new-champion-1',
  templateUrl: './new-champion-1.page.html',
  styleUrls: ['./new-champion-1.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NewChampion1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
