import { Component, OnInit } from '@angular/core';

import { DataDbService } from 'src/app/services/data-db.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  dataPortfolio: any;

  constructor(private dataPort: DataDbService) { this.dataPortfolio={}; }

  ngOnInit(): void {
    this.dataPort.obtainData().subscribe(data => {
      this.dataPortfolio = data.personalInformation;
    })
  }

}
