import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promo-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-promo-card.component.html',
  styleUrl: './app-promo-card.component.scss'
})
export class AppPromoCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() features: string[] = [];
  @Input() note = '';
  @Input() ctaText = 'Learn more';
}
