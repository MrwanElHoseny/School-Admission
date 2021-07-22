import { UploadService } from './uploadFile.service';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()

export class submission {

    constructor(private http: HttpClient,
        dateParser: NgbDateParserFormatter,
        private upload: UploadService,
        private router: Router
    ) {
    }

    baseUrl = 'https://localhost:44363/api'
    patch = false;
    applicantID;
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
        Email: '',
        Gender: '',
        Mobile: NaN,
        DateOfBirth: this.StudentDateOfBirth,
        PlaceOfBirth: '',
        SpokenLanguage: '',
        Nationality: '',
        Religion: ''
    }

    admissionDetails = {
        AcademicYear: '',
        Grade: 1,
        NewStudent: '',
        Section: '',
        Stage: 'KG'
    }
    secondLang = '';


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

    familyStatus = {
        Guardian: '',
        GuardianAddress: '',
        LanguageSpoken: '',
        MaritalStatus: ''
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



    submit() {
        let validSubmission = true;
        if (!this.patch) {
            //student
            this.http.post(this.baseUrl + '/applicant', this.studentData, { observe: 'response' }).subscribe(
                (res) => {
                    if (res.status == 200) {
                        console.log("student data submitted")
                    } else {
                        console.log("Error at student data")
                        console.log(res)
                        validSubmission = false;
                    }
                }
            )

            //ID
            this.http.get(this.baseUrl + '/Admin/CurrentId', { observe: 'response' }).subscribe(
                res => {
                    if (res.status == 200) {
                        console.log('student id succesfully obtained')
                        this.applicantID = res.body
                    }
                    else {
                        console.log('Error while obtaining current id')
                        console.log(res)
                        validSubmission = false;
                    }
                }
            )

            //parents
            this.http.post(this.baseUrl + '/applicant/' + this.applicantID + '/ParentInfo', this.parentsData, { observe: 'response' }).subscribe(
                res => {
                    if (res.status == 200) {
                        console.log('parents data added')
                    }
                    else {
                        console.log('Error while adding parents data')
                        console.log(res)
                        validSubmission = false;
                    }
                }
            )

            //family status
            this.http.post(this.baseUrl + '/applicant/' + this.applicantID + '/FamilyStatus', this.familyStatus, { observe: 'response' }).subscribe(
                res => {
                    if (res.status == 200) {
                        console.log('Family Status data added')
                    }
                    else {
                        console.log('Error while adding family status data')
                        console.log(res)
                        validSubmission = false;
                    }
                }
            )

            //admission details
            this.http.post(this.baseUrl + '/applicant/' + this.applicantID + '/AdmissionDetails', this.admissionDetails, { observe: 'response' }).subscribe(
                res => {
                    if (res.status == 200) {
                        console.log('admission details data added')
                    }
                    else {
                        console.log('Error while adding admission details')
                        console.log(res)
                        validSubmission = false;
                    }
                }
            )

            //Emergency Contacts
            this.http.post(this.baseUrl + '/applicant/' + this.applicantID + '/EmergencyContact', this.emergency, { observe: 'response' }).subscribe(
                res => {
                    if (res.status == 200) {
                        console.log('Emergency contacts data added')
                    }
                    else {
                        console.log('Error while adding emergency contacts')
                        console.log(res)
                        validSubmission = false;
                    }
                }
            )

            //siblings
            this.http.post(this.baseUrl + '/applicant/' + this.applicantID + '/Siblings', this.siblings, { observe: 'response' }).subscribe(
                res => {
                    if (res.status == 200) {
                        console.log('Siblings data added')
                    }
                    else {
                        console.log('Error while adding siblings')
                        console.log(res)
                        validSubmission = false;
                    }
                }
            )

            //medical
            this.http.post(this.baseUrl + '/applicant/' + this.applicantID + '/Medical', this.medical, { observe: 'response' }).subscribe(
                res => {
                    if (res.status == 200) {
                        console.log('Medical data added')
                    }
                    else {
                        console.log('Error while adding medical data')
                        console.log(res)
                        validSubmission = false;
                    }
                }
            )

            //documents
            this.upload.uploadFile(this.baseUrl + '/applicant/' + this.applicantID + '/Document', this.formDocs[this.docIndexes.indexOf(0)], 'StudentPhoto').subscribe(
                res => {
                    if (res.status == 200) {
                        console.log("Student photo uploaded succesfully.")
                        if (validSubmission) {
                            this.router.navigate(['applicant', 'admission', 'applicationReport'])
                        }
                    }
                    else {
                        console.log("Failed to upload student photo");
                        this.router.navigate(['applicant', 'admission', 'student'])
                    }
                }
            )
        }
    }

}