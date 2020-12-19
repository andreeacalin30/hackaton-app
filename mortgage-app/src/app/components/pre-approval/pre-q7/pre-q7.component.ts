import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
@Component({
  selector: 'app-pre-q7',
  templateUrl: './pre-q7.component.html',
  styleUrls: ['./pre-q7.component.scss']
})
export class PreQ7Component implements OnInit {
  @ViewChild('signaturePad') signaturePad: SignaturePad;
  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'maxWidth': 1.3,
    'canvasWidth': 150,
    'canvasHeight': 90
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextPage() {
    this.router.navigate(['']);
  }

  backPage() {
    this.router.navigate(['pre-q6']);
  }

  ngAfterViewInit() {
  }

  drawComplete() {
  }

  drawStart() {
  }

  clearSignature(){
    this.signaturePad.clear();
  }

}
