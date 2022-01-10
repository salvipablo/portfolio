import { Component, OnInit } from '@angular/core';

import { DataDbService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  dataPortfolio: any;

  constructor(private dataPort: DataDbService) { this.dataPortfolio = []; }

  ngOnInit(): void {
    this.dataPort.obtainData().subscribe(data => {
      this.dataPortfolio = data.education;
    })
  }

}
