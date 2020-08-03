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
import { AggregationType } from './aggregationType';
import { TimeDimension } from './timeDimension';
import { TimeField } from './timeField';


export interface AggregationKey { 
    name?: string;
    aggregationType?: AggregationType;
    forEdges?: boolean;
    property?: string;
    timeDim?: TimeDimension;
    timeField?: TimeField;
}