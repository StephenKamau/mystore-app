import {Component, EventEmitter, Output} from '@angular/core';

export interface Address {
  name: string;
  address: string;
  cardNumber: string;
}

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {
  address: Address = {
    name: '',
    address: '',
    cardNumber: ''
  }


  @Output() submit: EventEmitter<Address> = new EventEmitter<Address>();

  submitEvent(): void {
    this.submit.emit(this.address);
  }
}
