import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  generate<T extends object = object, R extends Array<T> = Array<T>>(
    len: number,
    callback: (index: number) => T
  ): R {
    const result = [];
    for (let index = 0; index < len; index++) {
      result.push(callback(index));
    }
    return result as R;
  }

  _faker = faker;
}
