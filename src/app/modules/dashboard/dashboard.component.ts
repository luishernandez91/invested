import {Component} from '@angular/core';
import {NavigationLinkInterface} from "@shared/interfaces/common.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  navigationRoutes: Array<NavigationLinkInterface> = [
    {
      path: '/',
      label: 'Customers'
    },
    {
      path: '/credits',
      label: 'Credits'
    }
  ];
}
