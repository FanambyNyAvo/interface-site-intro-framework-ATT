import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { HelpSectionComponent } from './components/help-section/help-section.component';
import { PromoCardsContainerComponent } from './components/promo-cards-container/promo-cards-container.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroBannerComponent, HelpSectionComponent, PromoCardsContainerComponent, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
