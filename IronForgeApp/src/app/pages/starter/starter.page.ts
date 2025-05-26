import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.page.html',
  styleUrls: ['./starter.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
  ]
})
export class StarterPage implements OnInit {

  constructor() {}

  ngOnInit() {}

}
