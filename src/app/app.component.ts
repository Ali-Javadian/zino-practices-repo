import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header/header.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AboutComponent } from './home/about/about.component';
import { DynamicDataListComponent } from './dynamic-data-list/dynamic-data-list.component';
import { DataListComponent } from './data-list/data-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterLinkActive,RouterOutlet,RouterLink,DynamicDataListComponent,DataListComponent, FormsModule ,HeaderComponent , DashboardComponent, AboutComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = "app-component"


}
