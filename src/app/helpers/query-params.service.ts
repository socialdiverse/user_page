import { Injectable } from '@angular/core';
import queryString, { StringifyOptions } from 'query-string';

@Injectable({
  providedIn: 'root',
})
export class QueryParamsService {
  public stringify(obj: Record<any, any>, opts?: StringifyOptions) {
    return queryString.stringify(obj, {
      arrayFormat: 'comma',
      arrayFormatSeparator: ',',
      ...opts,
    })
  }

  public parse(query: string, opts?: queryString.ParseOptions) {
    return queryString.parse(query, {
      arrayFormat: 'comma',
      parseBooleans: true,
      parseNumbers: true,
      ...opts
    })
  }
}
