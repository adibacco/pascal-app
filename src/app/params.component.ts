import { Component, OnChanges, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'pyramid-params',
  templateUrl: './pyramid-params.html'
})
export class PyramidParams {
  @Input() pyramidSize = 0;
  @Output() sizeChange = new EventEmitter();
  
  valid = true;
  message = '';

  get sizeModel() {
      return this.pyramidSize;
  }

  set sizeModel(value) {
    this.pyramidSize = value;
    
    if ((this.valid = this.validate()) == false) return;
    
    this.sizeChange.emit({
      value: this.pyramidSize
    });
  }
  
  validate(){
    var size = this.pyramidSize;
    if (size < 0) {
      this.message = 'Please, try positive numbers.'
      return false;
    }
    return true;
  }
}
