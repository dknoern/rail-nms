import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TableData } from '../md/md-table/md-table.component';
import { LegendItem, ChartType } from '../md/md-chart/md-chart.component';

import * as Chartist from 'chartist';

declare const $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  // constructor(private navbarTitleService: NavbarTitleService, private notificationService: NotificationService) { }
  public tableData: TableData;

  // constructor(private navbarTitleService: NavbarTitleService) { }
  public ngOnInit() {



      /*  **************** Public Preferences - Pie Chart ******************** */

      const dataComms = {
          labels: ['62%', '22%', '6%', '10'],
          series: [62, 22, 6, 10]
      };

      const dataPtc = {
          labels: ['62%', '22%', '6%', '10%'],
          series: [62, 22, 6, 10]
      };

      const dataCameras = {
          labels: ['73%', '20%', '7%'],
          series: [73, 20, 7]
      };
      const dataLocation = {
          labels: ['62', '22%', '6%', '10%'],
          series: [62, 22, 6, 10]
      };

      const options = {
          height: '230px'
      };

      new Chartist.Pie('#chartComms', dataComms, options);
      new Chartist.Pie('#chartPtc', dataPtc, options);
      new Chartist.Pie('#chartCameras', dataCameras, options);
      new Chartist.Pie('#chartLocation', dataLocation, options);





   }
   ngAfterViewInit() {
       const breakCards = true;
       if (breakCards === true) {
           // We break the cards headers if there is too much stress on them :-)
           $('[data-header-animation="true"]').each(function(){
               const $fix_button = $(this);
               const $card = $(this).parent('.card');
               $card.find('.fix-broken-card').click(function(){
                   const $header = $(this).parent().parent().siblings('.card-header, .card-image');
                   $header.removeClass('hinge').addClass('fadeInDown');

                   $card.attr('data-count', 0);

                   setTimeout(function(){
                       $header.removeClass('fadeInDown animate');
                   }, 480);
               });

               $card.mouseenter(function(){
                   const $this = $(this);
                   const hover_count = parseInt($this.attr('data-count'), 10) + 1 || 0;
                   $this.attr('data-count', hover_count);
                   if (hover_count >= 20) {
                       $(this).children('.card-header, .card-image').addClass('hinge animated');
                   }
               });
           });
       }
   }
}
