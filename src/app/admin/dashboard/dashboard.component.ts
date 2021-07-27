import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  statusData = [
    {
      name: "New",
      value: 8940
    },
    {
      name: "Waiting",
      value: 5000
    }, {
      name: "Accepted",
      value: 4000
    },
    {
      name: 'declined',
      value: 4234
    }
  ]

  paymentStatus = [
    {
      "name": "Paid",
      "value": 5420
    },
    {
      "name": "Unpaid",
      "value": 3852
    }
  ]
  districts = [
    {
      "name": "Giza",
      "value": 5420
    },
    {
      "name": "Maadi",
      "value": 2852
    },
    {
      "name": "Nasr city",
      "value": 7420
    },
    {
      "name": "6th of october",
      "value": 852
    }

  ]

  history = [
    {
      name: 'New Student',
      value: 3461
    },
    {
      name: "Transfered",
      value: 6293
    }
  ]
  siblings = [
    {
      name: '1',
      value: 2346
    }, {
      name: '2',
      value: 5239
    }, {
      name: '3',
      value: 1263
    }, {
      name: 'Other',
      value: 512
    }
  ]
  paymentMethods = [
    {
      name: 'NBE',
      value: 325632
    }, {
      name: 'Credit Card',
      value: 419342
    }, {
      name: 'Fawry',
      value: 129352
    }
  ]
  ngOnInit(): void {
  }

}
