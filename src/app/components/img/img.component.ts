import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass'],
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = '../../../assets/images/default.png'

  constructor() {
    /**
     * Before render
     * NO async -- once time */
    console.log('constructor', 'imgValue =>', this.img);
    this.img = 'santi';
  }

  ngOnChanges() {
    /**
     * Before and during render
     * changes inputs -- times
     */
     console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    /**
     * Before render
     * async - fetch <-> API <-> Async calls -- once time
     *
     */
     console.log('ngOnInit', 'imgValue =>', this.img);
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
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
