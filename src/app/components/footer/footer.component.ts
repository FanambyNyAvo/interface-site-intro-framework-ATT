import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  socialIcons = ['X', 'Facebook', 'Instagram', 'LinkedIn'];

  columns = [
    { title: 'Shop', links: ['Cell phones', 'Fiber internet', 'Home internet', 'Tablets', 'Smartwatches', 'Wireless accessories', 'Prepaid phones'] },
    { title: 'Trending', links: ['iPhone 17 Pro Max', 'iPhone 17 Pro', 'iPhone Air', 'iPhone 17', 'Samsung Galaxy S25 Ultra', 'Samsung Galaxy Z Fold7', 'Samsung Galaxy Z Flip7'] },
    { title: 'Top phone & data plans', links: ['Unlimited phone plans', 'International plans', 'Add a line', 'Upgrade', 'Tablet data plans', 'Mobile hotspot plans', 'Next Up Anytime'] },
    { title: 'Switch to AT&T', links: ['Switch to AT&T', 'How to switch phone carriers', 'Internet speed test', 'Bring your own device', 'Cell phone trade-in', 'Transfer your internet service'] },
    { title: 'Featured deals', links: ['AT&T Deals & Promotions', 'Cell phone deals', 'iPhone deals', 'Samsung deals', 'Phone and internet bundle deals', 'Credit card discount', 'No trade-in deals'] }
  ];

  legalLinks = ['Site map', 'Coverage maps', 'Terms of use', 'Accessibility', 'Broadband details', 'Privacy center', 'Your Privacy Choices'];
}
