import { Component, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
})

export class PhotoComponent {
  constructor(){}
  @Input('photo') photo: any = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.photo = changes['photo'].currentValue;
  }
}


