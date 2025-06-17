import { Component } from '@angular/core';
import { ButtonComponent } from '../../share/button/button.component';

@Component({
  selector: 'app-feature',
  imports: [ButtonComponent],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.scss',
})
export class FeatureComponent {}
