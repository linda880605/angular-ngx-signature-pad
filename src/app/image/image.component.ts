import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  onChangeVar(variable: string) {
    const obj = <HTMLImageElement>document.getElementById('img');
    obj.src = variable;
  }

}
