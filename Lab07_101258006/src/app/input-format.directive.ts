import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective{
  
  constructor(public el: ElementRef) { }

  @HostListener('blur') onBlur() {
    if(this.el.nativeElement.value) {
      const newValue = this.el.nativeElement.value.toUpperCase();
      this.el.nativeElement.value = newValue;
    }
  }

}
