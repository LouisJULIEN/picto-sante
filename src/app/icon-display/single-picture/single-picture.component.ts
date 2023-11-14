import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-picture',
  templateUrl: './single-picture.component.html',
  styleUrls: ['./single-picture.component.css']
})
export class SinglePictureComponent implements OnInit {


  @Input()
  public imagePath: string
  public imageFullPath: string;

  constructor() {
  }

  ngOnInit(): void {
    this.imageFullPath = `assets/health-icons/filled/${this.imagePath}`
  }

}
