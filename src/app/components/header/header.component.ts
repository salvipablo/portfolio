import { Component, OnInit } from '@angular/core';

import { DataDbService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataPortfolio: any;

  constructor(private dataPort: DataDbService) { this.dataPortfolio={}; }

  ngOnInit(): void {
    this.dataPort.obtainData().subscribe(data => {
      this.dataPortfolio = data;
    })
  }

}
