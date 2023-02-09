import {Component, Input} from '@angular/core';
import {NavigationLinkInterface} from "@shared/interfaces/common.interface";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() navigationLinks: Array<NavigationLinkInterface> = [];
}
