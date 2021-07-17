import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class submission {

    constructor(private http: HttpClient, dateParser: NgbDateParserFormatter) {
    }
    studentDateOfBirth = {
        day: NaN,
        month: NaN,
        year: NaN
    }
    StudentDateOfBirth = String(this.studentDateOfBirth.day) + '/' + String(this.studentDateOfBirth.month) + '/' + String(this.studentDateOfBirth);

    fatherDateOfBirth = {
        day: NaN,
        month: NaN,
        year: NaN
    }
    FatherDateOfBirth = String(this.fatherDateOfBirth.day) + '/' + String(this.fatherDateOfBirth.month) + '/' + String(this.fatherDateOfBirth);

    motherDateOfBirth = {
        day: NaN,
        month: NaN,
        year: NaN
    }
    MotherDateOfBirth = String(this.motherDateOfBirth.day) + '/' + String(this.motherDateOfBirth.month) + '/' + String(this.motherDateOfBirth);

    studentData = {
        FirstName: '',
        SecondName: '',
        LastName: '',
        Gender: '',
        Mobile: NaN,
        DateOfBirth: this.StudentDateOfBirth,
        PlaceOfBirth: '',
        SpokenLanguage: '',
        Nationality: '',
        Religion: ''
    }

    familyStatus = {
        Guardian: '',
        GuardianAddress: '',
        LanguageSpoken: '',
        MaritalStatus: ''
    }

    parentsData = [
        {
            FirstName: '',
            SecondName: '',
            LastName: '',
            DateOfBirth: this.FatherDateOfBirth,
            CompanyName: '',
            Email: '',
            IdentificationNumber: NaN,
            IdentificationType: '',
            Mobile: NaN,
            Nationality: '',
            Occupation: '',
            Religion: '',
            Gender: 'Male'
        },
        {
            FirstName: '',
            SecondName: '',
            LastName: '',
            DateOfBirth: this.MotherDateOfBirth,
            CompanyName: '',
            Email: '',
            IdentificationNumber: NaN,
            IdentificationType: '',
            Mobile: NaN,
            Nationality: '',
            Occupation: '',
            Religion: '',
            Gender: 'Female'
        }

    ]

    admissionDetails = {
        AcademicYear: '',
        Grade: 1,
        NewStudent: '',
        secondLang: '',
        Section: '',
        Stage: 'KG'
    }

    emergency: {
        FullName: string,
        HomeNumber: number,
        MobileNumber: number,
        Relationship: string
    }[] = [{
        FullName: '',
        HomeNumber: NaN,
        MobileNumber: NaN,
        Relationship: ''
    }]

    emergencyRows = [1];
    numOfEmergencyRows = 1;


    siblings: {
        FullName: string,
        SchoolBranch: string,
        Age: number,
        Relationship: string
    }[] = []

    SiblingsRows = [];
    numOfSiblingsRows = 0;

    medical = {
        PhysiologicalNeed: '',
        Glass: '',
        Hearing: '',
        PhysiologicalConditions: '',
        MedicalConditions: ''
    }

    formDocs: File[] = [];
    docIndexes: number[] = []


    creditPayment = {
        CVV: NaN,
        ExpiryDate: '',
        CardNumber: NaN
    }


    submitStudent() {
        this.http.post("https://localhost:44363/api/applicant", this.studentData)
    }
}