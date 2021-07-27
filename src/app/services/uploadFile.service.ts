import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class UploadService {

    constructor(private http: HttpClient) { }

    // file from event.target.files[0]
    uploadFile(url: string, file: File, name: string, filename: string): Observable<HttpResponse<object>> {

        let formData = new FormData();
        formData.append(name, file);
        formData.append('DocumentName', filename);

        let params = new HttpParams();
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');

        // const options = {
        //     params: params,
        //     reportProgress: true,
        //     observe: 'response'
        // };

        // const req = new HttpRequest('POST', url, formData, options);

        return this.http.post(url, formData, {
            params: params,
            reportProgress: true,
            observe: 'response',
            headers: headers
        })


    }
}

