/**
 * Temporal Graph API
 * API for Temporal Graph
 *
 * OpenAPI spec version: 1.0.0
 * Contact: ji67mary@studserv.uni-leipzig.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { DifferenceRequest } from '../model/differenceRequest';
import { Graph } from '../model/graph';
import { GroupingRequest } from '../model/groupingRequest';
import { KeysAndLabels } from '../model/keysAndLabels';
import { SnapshotRequest } from '../model/snapshotRequest';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class DefaultService {

    protected basePath = 'http://localhost:2347';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Difference operation
     * Performs difference operation on a graph
     * @param differenceRequest Difference request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public difference(differenceRequest?: DifferenceRequest, observe?: 'body', reportProgress?: boolean): Observable<Graph>;
    public difference(differenceRequest?: DifferenceRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Graph>>;
    public difference(differenceRequest?: DifferenceRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Graph>>;
    public difference(differenceRequest?: DifferenceRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Graph>(`${this.basePath}/difference`,
            differenceRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Return whole graph
     * Returns the selected Graph in cytoscape format
     * @param databaseName Name of Database that should be returned
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGraph(databaseName: string, observe?: 'body', reportProgress?: boolean): Observable<Graph>;
    public getGraph(databaseName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Graph>>;
    public getGraph(databaseName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Graph>>;
    public getGraph(databaseName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (databaseName === null || databaseName === undefined) {
            throw new Error('Required parameter databaseName was null or undefined when calling getGraph.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.post<Graph>(`${this.basePath}/graph/${encodeURIComponent(String(databaseName))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get available Graphs
     * Get the names of all available graphs on server
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGraphs(observe?: 'body', reportProgress?: boolean): Observable<Array<string>>;
    public getGraphs(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<string>>>;
    public getGraphs(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<string>>>;
    public getGraphs(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<string>>(`${this.basePath}/graph`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get/Compute Keys and Labels of this database
     * Labels and Keys for further processing
     * @param databaseName Name of Database that should be returned
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getKeys(databaseName: string, observe?: 'body', reportProgress?: boolean): Observable<KeysAndLabels>;
    public getKeys(databaseName: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<KeysAndLabels>>;
    public getKeys(databaseName: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<KeysAndLabels>>;
    public getKeys(databaseName: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (databaseName === null || databaseName === undefined) {
            throw new Error('Required parameter databaseName was null or undefined when calling getKeys.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];

        return this.httpClient.post<KeysAndLabels>(`${this.basePath}/keys/${encodeURIComponent(String(databaseName))}`,
            null,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * grouping operation
     * Performs Snapshot operation on a graph
     * @param groupingRequest Grouping Request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public grouping(groupingRequest?: GroupingRequest, observe?: 'body', reportProgress?: boolean): Observable<Graph>;
    public grouping(groupingRequest?: GroupingRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Graph>>;
    public grouping(groupingRequest?: GroupingRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Graph>>;
    public grouping(groupingRequest?: GroupingRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Graph>(`${this.basePath}/grouping`,
            groupingRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Snapshot operation
     * Performs Snapshot operation on a graph
     * @param snapshotRequest Snapshot request
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public snapshot(snapshotRequest?: SnapshotRequest, observe?: 'body', reportProgress?: boolean): Observable<Graph>;
    public snapshot(snapshotRequest?: SnapshotRequest, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Graph>>;
    public snapshot(snapshotRequest?: SnapshotRequest, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Graph>>;
    public snapshot(snapshotRequest?: SnapshotRequest, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Graph>(`${this.basePath}/snapshot`,
            snapshotRequest,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}