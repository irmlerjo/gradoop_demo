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
import { ChronoField } from './chronoField';
import { ChronoUnit } from './chronoUnit';
import { GroupingType } from './groupingType';
import { TimeDimension } from './timeDimension';
import { TimeField } from './timeField';


export interface GroupingKey { 
    groupingType: GroupingType;
    forVertex: boolean;
    labelSpecific: boolean;
    label?: string;
    property?: string;
    timeDim?: TimeDimension;
    timeField?: TimeField;
    chronoUnit?: ChronoUnit;
    chronoField?: ChronoField;
}