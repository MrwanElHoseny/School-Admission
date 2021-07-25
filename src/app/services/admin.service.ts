import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from "@angular/core";

@Injectable()

export class admin {

    baseUrl = 'https://localhost:44363/api';
    adminName = '';
    constructor() {

    }

    formatDate(date: NgbDateStruct): string {

        return date.year + '-' + ('0' + date.month).slice(-2) + '-' + ('0' + date.day).slice(-2);
    }
}