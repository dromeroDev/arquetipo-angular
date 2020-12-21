import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-confirm',
  templateUrl: './modal.confirm.html'
})
export class NgbdModalConfirm {
  @Input() public elemento: any;
  constructor(public modal: NgbActiveModal) {}
}