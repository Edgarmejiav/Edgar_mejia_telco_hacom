import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appValidateDate]'
})
export class ValidateDateDirective implements OnInit {
  @Input('appValidateDate') date = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const parsedDate = new Date(this.date);
    const isValid = !isNaN(parsedDate.getTime());

    if (isValid) {
      this.el.nativeElement.textContent = parsedDate.toLocaleDateString();
    } else {
      this.el.nativeElement.textContent = 'Fecha no válida';
    }
  }
}
