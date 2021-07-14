export class submission {
    studentData = {
        firstName: '',
        secondName: '',
        thirdName: '',
        lastName: '',
        gender: '',
        mobile: NaN,
        dob: {
            day: NaN,
            month: NaN,
            year: NaN
        },
        pob: '',
        motherLang: '',
        nationality: '',
        religion: ''
    }

    parentsData = {
        fatherDetails: {
            FatherFirstName: '',
            FatherSecondName: '',
            FatherThirdName: '',
            FatherDateOfBirth: {
                day: NaN,
                month: NaN,
                year: NaN
            },
            FatherCompany: '',
            FatherEmail: '',
            FatherIdNum: NaN,
            FatherIdType: '',
            FatherMobile: NaN,
            FatherNationality: '',
            FatherOccupation: '',
            FatherReligion: ''

        },
        motherDetails: {
            MotherFirstName: '',
            MotherSecondName: '',
            MotherThirdName: '',
            MotherDateOfBirth: {
                day: NaN,
                month: NaN,
                year: NaN
            },
            MotherCompany: '',
            MotherEmail: '',
            MotherIdNum: NaN,
            MotherIdType: '',
            MotherMobile: NaN,
            MotherNationality: '',
            MotherOccupation: '',
            MotherReligion: ''
        },
        familyStatus: {
            Guardian: '',
            GuardianAddress: '',
            LanguageSpoken: '',
            MaritalStatus: ''
        }
    }

    admissionDetails = {
        academicYear: '',
        grade: 1,
        newStudent: '',
        secondLang: '',
        section: '',
        stage: 'KG'
    }

    emergency: {
        FullName: string,
        HomeNumber: number,
        Mobile: number,
        Relationship: string
    }[] = [{
        FullName: '',
        HomeNumber: NaN,
        Mobile: NaN,
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
        AssessedByPsycologist: '',
        GlassesOrContacts: '',
        HearingAids: '',
        MedicalCondition: '',
        Needs: ''
    }

    formDocs: File[] = [];
    docIndexes: number[] = []


    creditPayment = {
        CVV: NaN,
        ExpiryDate: '',
        CardNumber: NaN
    }

}