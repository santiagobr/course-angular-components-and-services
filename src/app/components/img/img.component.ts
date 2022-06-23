import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass'],
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img =>', this.img)
  }
  @Input() alt: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/images/default.png'
  /* counter = 0;
  counterFn: number | undefined; */

  constructor() {
    /**
     * Before render
     * NO async -- once time */
    console.log('constructor', 'imgValue =>', this.img);
    this.img = 'santi';
  }

  ngOnChanges(changes: SimpleChanges) {
    /**
     * Before and during render
     * changes inputs -- times
     */
     console.log('ngOnChanges', 'imgValue =>', this.img);
     console.log('changes', changes);

  }

  ngOnInit(): void {
    /**
     * Before render
     * async - fetch <-> API <-> Async calls -- once time
     *
     */
     console.log('ngOnInit', 'imgValue =>', this.img);
     /* this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');
     }, 1000) */
  }

  ngAfterViewInit() {
    /**
     * After render
     * handler children
     */
     console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    /**
     * Delete
     */
     console.log('ngOnDestroy');
    //  window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
