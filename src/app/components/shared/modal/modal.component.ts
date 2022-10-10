import { Component, OnInit, Input } from '@angular/core';
// import { Modal } from './modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() id = '';
  @Input() title = '';
  @Input() content = '';
  @Input() modalSize = '';
  @Input() formCheck: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
