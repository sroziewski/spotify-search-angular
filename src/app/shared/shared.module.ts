import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabsNavComponent } from './tabs-nav/tabs-nav.component';
import { TabDirective } from './tab.directive';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [HighlightDirective, UnlessDirective, CardComponent, TabsComponent, TabComponent, TabsNavComponent, TabDirective, MessageComponent],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, UnlessDirective, CardComponent, TabsComponent, TabComponent, TabsNavComponent, TabDirective]
})
export class SharedModule { }
