/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createServerWeatherForecastFromDiscriminatorValue, type ServerWeatherForecast } from '../models/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /weatherforecast
 */
export interface WeatherforecastRequestBuilder extends BaseRequestBuilder<WeatherforecastRequestBuilder> {
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<ServerWeatherForecast[]>}
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<ServerWeatherForecast[] | undefined>;
    /**
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Uri template for the request builder.
 */
export const WeatherforecastRequestBuilderUriTemplate = "{+baseurl}/weatherforecast";
/**
 * Metadata for all the requests in the request builder.
 */
export const WeatherforecastRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: WeatherforecastRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "sendCollection",
        responseBodyFactory:  createServerWeatherForecastFromDiscriminatorValue,
    },
};
/* tslint:enable */
/* eslint-enable */
