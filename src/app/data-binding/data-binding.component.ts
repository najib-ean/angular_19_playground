import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  name: String = 'Fuad Najibullah';
  profession: String = 'Backend Engineer';
  image: String =
    'https://media.licdn.com/dms/image/v2/D5603AQGlbQHLRxevuQ/profile-displayphoto-scale_400_400/B56ZrTH9mmK0Ak-/0/1764478673640?e=1766620800&v=beta&t=SHDEGZAO4fM13on9vhqARexWafvOzTaRSdzazYqCvfY';
  random = '';

  onSave() {
    alert('Data saved!');
  }

  onChange() {
    alert('Country has changed.');
  }
}
