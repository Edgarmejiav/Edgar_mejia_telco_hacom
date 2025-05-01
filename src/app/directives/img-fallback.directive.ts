import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appImgFallback]'
})
export class ImgFallbackDirective {

  @Input() appImgFallback!: string;

  constructor(private el: ElementRef) {}

  @HostListener('error') onError() {
    this.setFallbackImage();
  }

  private setFallbackImage() {
    const img: HTMLImageElement = this.el.nativeElement;
    img.src = this.appImgFallback || 'assets/default-image.jpg';
  }
}
