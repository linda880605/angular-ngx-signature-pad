import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgxSignaturePadComponent, NgxSignatureOptions } from '@eve-sama/ngx-signature-pad';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css'],
})
export class SignatureComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onChangeVar = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  private image = new Image();

  @ViewChild('signature') signature: NgxSignaturePadComponent;

  public options: NgxSignatureOptions = {
    backgroundColor: '#E0E0E0',
    width: 765,
    height: 350
  };

  ngOnInit(): void {

  }

  public clear(): void {
    this.signature.clear();
  }

  public save(): void {
    let base64: string;
    base64 = this.signature.toDataURL();
    this.onChangeVar.emit(base64);
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

}
