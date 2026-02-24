import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Inject, OnInit, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class EndpointComponent {
    currentDomain = '';
    headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

    constructor(
        private httpClient: HttpClient,
        @Inject(DOCUMENT) private document: any
    ) { }

    public getApiUrl(): string {

        if (window.location.port) {
            return window.location.protocol + "//" + this.document.location.hostname + ":8290/api";
        }
        
        return window.location.protocol + "//" + this.document.location.hostname + "/api";
    }

    public obtenerContenido(id: any): Observable<any> {
        return this.httpClient.get<any>(`assets/content/${id}.json`).pipe(
            catchError(this.handleError('obtenerContenido', { message: `Could not get content detail ${id}` }))
        );
    }

    public obtenerPerfil(id: any): Observable<any> {
        return this.httpClient.get<any>(`assets/content/profile/${id}.json`).pipe(
            catchError(this.handleError('obtenerPerfil', { message: `Could not get profile detail ${id}` }))
        );
    }

    private handleError(operation = 'operation', result: any) {
        return (error: any): Observable<any> => {
            if (error instanceof HttpErrorResponse) {
                if (error.error && error.error.message) {
                    return of({ message: error.error.message });
                }
            }

            console.error(operation);
            console.error(error);

            return of(result);
        };
    }
}