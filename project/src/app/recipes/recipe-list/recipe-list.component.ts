import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is test', 'https://static.toiimg.com/thumb/msid-62757808,width-400,resizemode-4,imgsize-52519/62757808.jpg'),
    new Recipe('A Test Recipe', 'This is test', 'https://static.toiimg.com/thumb/msid-62757808,width-400,resizemode-4,imgsize-52519/62757808.jpg') 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
