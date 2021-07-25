import { UploadService } from './uploadFile.service';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface applicantData {
    Applicant: {
        FirstName: string,
        SecondName: string,
        LastName: string,
        Email: string,
        Gender: string,
        Mobile: string,
        DateOfBirth: string,
        PlaceOfBirth: string,
        SpokenLanguage: string,
        Nationality: string,
        Religion: string,
        Status: string,
        AdmissionDate: string
    },
    ParentInfo:
    {
        FirstName: string,
        SecondName: string,
        LastName: string,
        DateOfBirth: string,
        CompanyName: string,
        Email: string,
        IdentificationNumber: string,
        IdentificationType: string,
        Mobile: string,
        Nationality: string,
        Occupation: string,
        Relegion: string,
        Gender: string,
        Id: string
    }[],
    FamilyStatus: {
        Guardian: string,
        GuardianAddress: string,
        LanguageSpoken: string,
        MaritalStatus: string
    },
    AdmissionDetails: {
        AcademicYear: string,
        Grade: string,
        NewStudent: string,
        Section: string,
        Stage: string
    },
    EmergencyContact: {
        FullName: string,
        HomeNumber: string,
        MobileNumber: string,
        Relationship: string,
        Id: string
    }[],
    Sibling: {
        SiblingName: string,
        SchoolBranch: string,
        Age: number,
        Relationship: string,
        Id: string
    }[],
    MedicalHistory: {
        PhysiologicalNeed: string,
        Glass: string,
        Hearing: string,
        PhysiologicalConditions: string,
        MedicalConditions: string
    }

}

@Injectable()

export class submission {

    constructor(private http: HttpClient,
        dateParser: NgbDateParserFormatter,
        private upload: UploadService,
        private router: Router,
    ) {
        if (this.patch) {
            console.log("patch active")
            this.getApplicantData(this.applicantID);
        }

    }

    baseUrl = 'https://localhost:44363/api'
    patch = false;
    applicantID = '';
    username = '';

    studentDateOfBirth = {
        day: NaN,
        month: NaN,
        year: NaN
    }
    fatherDateOfBirth = {
        day: NaN,
        month: NaN,
        year: NaN
    }

    motherDateOfBirth = {
        day: NaN,
        month: NaN,
        year: NaN
    }

    studentData: {
        FirstName: string,
        SecondName: string,
        LastName: string,
        Email: string,
        Gender: string,
        Mobile: string,
        DateOfBirth: string,
        PlaceOfBirth: string,
        SpokenLanguage: string,
        Nationality: string,
        Religion: string,
        Status?: string,
        AdmissionDate?: string
    } = {
            FirstName: '',
            SecondName: '',
            LastName: '',
            Email: '',
            Gender: '',
            Mobile: '',
            DateOfBirth: '',
            PlaceOfBirth: '',
            SpokenLanguage: '',
            Nationality: '',
            Religion: ''
        }

    admissionDetails = {
        AcademicYear: '',
        Grade: '',
        NewStudent: '',
        Section: '',
        Stage: 'KG'
    }
    secondLang = '';


    parentsData: {
        FirstName: string,
        SecondName: string,
        LastName: string,
        DateOfBirth: string,
        CompanyName: string,
        Email: string,
        IdentificationNumber: string,
        IdentificationType: string,
        Mobile: string,
        Nationality: string,
        Occupation: string,
        Relegion: string,
        Gender: string,
        Id?: string
    }[] = [
            {
                FirstName: '',
                SecondName: '',
                LastName: '',
                DateOfBirth: '',
                CompanyName: '',
                Email: '',
                IdentificationNumber: '',
                IdentificationType: '',
                Mobile: '',
                Nationality: '',
                Occupation: '',
                Relegion: '',
                Gender: 'Male'
            },
            {
                FirstName: '',
                SecondName: '',
                LastName: '',
                DateOfBirth: '',
                CompanyName: '',
                Email: '',
                IdentificationNumber: '',
                IdentificationType: '',
                Mobile: '',
                Nationality: '',
                Occupation: '',
                Relegion: '',
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
        HomeNumber: string,
        MobileNumber: string,
        Relationship: string,
        Id?: string
    }[] = [{
        FullName: '',
        HomeNumber: '',
        MobileNumber: '',
        Relationship: ''
    }]

    emergencyRows = [0];


    siblings: {
        SiblingName: string,
        SchoolBranch: string,
        Age: number,
        Relationship: string,
        Id?: string
    }[] = []

    SiblingsRows = [];

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


    docNamesMap = {
        0: 'StudentPhoto',
        1: 'BC',
        2: 'ParentsID',
        3: 'IR',
        4: 'DR'

    }

    getApplicantData(id: string) {
        this.http.get<applicantData>(this.baseUrl + '/Admin/' + id + '/GetApplication', { observe: 'response' }).subscribe(
            res => {
                if (res.ok) {

                    this.studentData = res.body.Applicant;
                    this.parentsData = res.body.ParentInfo;
                    this.admissionDetails = res.body.AdmissionDetails;
                    this.familyStatus = res.body.FamilyStatus;
                    this.emergency = res.body.EmergencyContact;
                    this.siblings = res.body.Sibling;
                    this.medical = res.body.MedicalHistory;

                    this.emergencyRows = []
                    this.SiblingsRows = [];

                    this.siblings.forEach(
                        (row, index) => {
                            this.SiblingsRows.push(index)
                        }
                    )
                    this.emergency.forEach(
                        (row, index) => {
                            this.emergencyRows.push(index)
                        }
                    )


                } else {
                    console.log('Error retrieving applicant data')
                }
            }
        )
    }


    submit(): boolean {
        this.studentData.DateOfBirth = String(this.studentDateOfBirth.year) + '/' + String(this.studentDateOfBirth.month) + '/' + String(this.studentDateOfBirth.day);
        this.parentsData[0].DateOfBirth = String(this.fatherDateOfBirth.year) + '/' + String(this.fatherDateOfBirth.month) + '/' + String(this.fatherDateOfBirth.day);
        this.parentsData[1].DateOfBirth = String(this.motherDateOfBirth.year) + '/' + String(this.motherDateOfBirth.month) + '/' + String(this.motherDateOfBirth.day);
        let validSubmission = true;
        //student
        this.http.post(this.baseUrl + '/applicant', this.studentData, { observe: 'response' }).subscribe(
            (res) => {
                if (res.ok) {
                    console.log("student data submitted")

                    //ID
                    this.http.get<string>(this.baseUrl + '/Admin/CurrentId', { observe: 'response' }).subscribe(
                        res => {
                            if (res.ok) {
                                console.log('student id succesfully obtained')
                                this.applicantID = res.body

                                //parents
                                this.http.post(this.baseUrl + '/applicant/' + this.applicantID + '/ParentInfo', this.parentsData, { observe: 'response' }).subscribe(
                                    res => {
                                        if (res.ok) {
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
                                        if (res.ok) {
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
                                        if (res.ok) {
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
                                this.http.post(this.baseUrl + '/applicant/' + this.applicantID + '/EmergencyContacts', this.emergency, { observe: 'response' }).subscribe(
                                    res => {
                                        if (res.ok) {
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
                                        if (res.ok) {
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
                                        if (res.ok) {
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
                                this.upload.uploadFile(this.baseUrl + '/applicant/' + this.applicantID + '/Document', this.formDocs[this.docIndexes.indexOf(0)], 'Copy', this.docNamesMap[0]).subscribe(
                                    res => {
                                        if (res.ok) {
                                            console.log("Student photo uploaded succesfully.")
                                            if (validSubmission) {
                                            }
                                        }
                                        else {
                                            console.log("Failed to upload student photo");
                                        }
                                    }
                                )

                                this.upload.uploadFile(this.baseUrl + '/applicant/' + this.applicantID + '/Document', this.formDocs[this.docIndexes.indexOf(1)], 'Copy', this.docNamesMap[1]).subscribe(
                                    res => {
                                        if (res.ok) {
                                            console.log("Birth Certificate uploaded succesfully.")
                                            if (validSubmission) {
                                            }
                                        }
                                        else {
                                            console.log("Failed to upload birth certificate");
                                        }
                                    }
                                )

                                this.upload.uploadFile(this.baseUrl + '/applicant/' + this.applicantID + '/Document', this.formDocs[this.docIndexes.indexOf(2)], 'Copy', this.docNamesMap[2]).subscribe(
                                    res => {
                                        if (res.ok) {
                                            console.log("Parents ID uploaded succesfully.")
                                            if (validSubmission) {
                                            }
                                        }
                                        else {
                                            console.log("Failed to upload Parents ID");
                                        }
                                    }
                                )

                                this.upload.uploadFile(this.baseUrl + '/applicant/' + this.applicantID + '/Document', this.formDocs[this.docIndexes.indexOf(3)], 'Copy', this.docNamesMap[3]).subscribe(
                                    res => {
                                        if (res.ok) {
                                            console.log("Immunization record uploaded succesfully.")
                                            if (validSubmission) {
                                            }
                                        }
                                        else {
                                            console.log("Failed to upload Immunization Record");
                                        }
                                    }
                                )

                                this.upload.uploadFile(this.baseUrl + '/applicant/' + this.applicantID + '/Document', this.formDocs[this.docIndexes.indexOf(4)], 'Copy', this.docNamesMap[4]).subscribe(
                                    res => {
                                        if (res.ok) {
                                            console.log("Dr report uploaded succesfully.")
                                            if (validSubmission) {
                                            }
                                        }
                                        else {
                                            console.log("Failed to upload dr report");
                                        }
                                    }
                                )

                                /// Payment
                                if (this.router.url == '/applicant/admission/payment/credit') {

                                    this.http.get(this.baseUrl + '/Applicant/Payment', { observe: 'response', responseType: 'text' }).subscribe(
                                        res => {
                                            if (res.ok) {
                                                window.open(res.body);
                                            }
                                            else {
                                                console.log("Error getting payment url")
                                            }
                                        }
                                    )
                                }
                            }
                            else {
                                console.log('Error while obtaining current id');
                                validSubmission = false;
                            }
                        }
                    )


                } else {
                    console.log("Error at student data")
                    console.log(res)
                    validSubmission = false;
                }
            }
        )

        return validSubmission;
    }

}