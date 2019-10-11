import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#progress-one').progress({
      percent: 74,
    });
    $('#progress-two').progress({
      percent: 65,
    });
    $('#progress-three').progress({
      percent: 86,
    });

    $(function () {
      $('.circlechart').circlechart();
    });
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
      loop: false,
      margin: 10,
      autoplay: false,
      dots: false,
      navRewind: false,
      // autoplayTimeout: 2000,
      // autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
          loop: false,
          navClass: ['owl-prev', 'owl-next'],
    
        },
        680: {
          items: 2,
          nav: true,
          loop: false,
          navClass: ['owl-prev', 'owl-next'],
        },
        1000: {
          items: 3,
          margin: 35,
          nav: true,
          navClass: ['owl-prev', 'owl-next'],
          // navText: ["<img src='assets/images/angle-left-solid.svg'>", "<img src='assets/images/angle-right-solid.svg'>"]
        },
        1400: {
          items: 4,
          margin: 35,
          nav: true,
          navClass: ['owl-prev', 'owl-next'],
        }
      }
    });
    });

  }
}






