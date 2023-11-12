import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import * as moment from 'moment';

@Directive({
  standalone: true,
  selector: '[appTimeAgo]',
})
export class TimeAgoDirective {
  @Input('appTimeAgo') time: Date = new Date();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const formattedTime = this.calculateTimeAgo(this.time);
    this.renderer.setProperty(
      this.el.nativeElement,
      'textContent',
      formattedTime
    );
  }

  private calculateTimeAgo(time: Date): string {
    const now = moment();
    const inputTime = moment(time);
    const duration = moment.duration(now.diff(inputTime));

    return duration.locale('vi').humanize(true);
  }
}
