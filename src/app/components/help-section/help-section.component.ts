import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-help-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './help-section.component.html',
  styleUrl: './help-section.component.scss'
})
export class HelpSectionComponent {
  helpLinks = [
    { icon: '🔍', label: 'Explore AT&T support' },
    { icon: '📱', label: 'Shop phones & devices' },
    { icon: '👤', label: 'Manage your account' },
    { icon: '📦', label: 'Get device help' },
    { icon: '🖥️', label: 'Explore AT&T Business support' },
    { icon: '❓', label: 'Find Small Business help' }
  ];
}
