import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketRouting } from './market.routing';
import { MarketComponent } from './market.component';

@NgModule({
  declarations: [MarketComponent],
  imports: [CommonModule, MarketRouting],
})
export class MarketModule {}
