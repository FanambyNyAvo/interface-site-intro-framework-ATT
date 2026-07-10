import { Component } from '@angular/core';
import { AppPromoCardComponent } from '../app-promo-card/app-promo-card.component';

@Component({
  selector: 'app-promo-cards-container',
  standalone: true,
  imports: [AppPromoCardComponent],
  templateUrl: './promo-cards-container.component.html',
  styleUrl: './promo-cards-container.component.scss'
})
export class PromoCardsContainerComponent {
  myAttCard = {
    title: 'Get the myAT&T app',
    description: 'Access all your account info in one place:',
    features: ['View and pay your bill', 'Make and confirm payments', 'Shop and upgrade your device'],
    note: 'Text myATT to 556699 for the link. Message and data rates may apply.'
  };

  smartHomeCard = {
    title: 'Use the Smart Home Manager app',
    description: 'Manage your Wi-Fi network and your devices—anytime, anywhere. You can:',
    features: ['Manage screen time and user access', 'Track data usage by device', 'Troubleshoot your service'],
    note: 'AT&T Smart Home Manager app available to AT&T Internet service customers with a compatible AT&T Wi-Fi Gateway.'
  };
}
