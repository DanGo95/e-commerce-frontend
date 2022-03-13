import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';



@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
    });
  }

}
