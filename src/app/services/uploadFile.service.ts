import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class UploadService {

    constructor(private http: HttpClient) { }

    // file from event.target.files[0]
    uploadFile(url: string, file: File, filename: string): Observable<HttpResponse<object>> {

        let formData = new FormData();
        formData.append(filename, file);

        let params = new HttpParams();

        // const options = {
        //     params: params,
        //     reportProgress: true,
        //     observe: 'response'
        // };

        // const req = new HttpRequest('POST', url, formData, options);

        return this.http.post(url, formData, {
            params: params,
            reportProgress: true,
            observe: 'response'
        })


    }
}

