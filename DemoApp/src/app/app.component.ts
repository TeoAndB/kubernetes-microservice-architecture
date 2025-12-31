// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MongoService } from './mongo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Data Fetched via HTTP:';
  mysqlData = 'Loading MySQL data...';
  mongoData = 'Loading MongoDB data...';

  constructor(private mongoService: MongoService) {}

  ngOnInit() {
    this.mongoService.getMongoData().subscribe(data => {
      this.mongoData = data;
    });

    this.mongoService.getMysqlData().subscribe(data => {
      this.mysqlData = data;
    });
  }
}
