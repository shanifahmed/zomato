import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodserviceService } from '../../../foodservice.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarRating, StarRatingModule } from 'angular-star-rating';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,CommonModule,StarRatingModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods:Food[]=[];
  constructor(private foodservice:FoodserviceService) { 
  
  this.foods=foodservice.getAll();
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
}
