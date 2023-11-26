// format with moment

import * as moment from 'moment';

export enum FORMAT_DATE {
  DD_MM_YYYY = 'DD/MM/YYYY',
  YYYY_MM_DD = 'YYYY/MM/DD',
  YYYY_MM_DD_HH_MM_SS = 'YYYY/MM/DD HH:mm:ss',
  YYYY_MM_DD_HH_MM = 'YYYY/MM/DD HH:mm',
  HH_MM_A = 'HH:mm A',
  MMMM_D_YYYY_H_MM_A = 'MMMM D, YYYY, h:mm A'
}

/**
 * @param date
 * @param format default YYYY/MM/DD
 * @returns string
 * @description format date with moment
 * @enum {DD_MM_YYYY} `DD/MM/YYYY`
 * @enum {YYYY_MM_DD} `YYYY/MM/DD`
 * @enum {YYYY_MM_DD_HH_MM_SS} `YYYY/MM/DD HH:mm:ss`
 * @enum {YYYY_MM_DD_HH_MM} `YYYY/MM/DD HH:mm`
 * @example formatDate('2021-01-01', FORMAT_DATE.DD_MM_YYYY) => '01/01/2021'
 * @example formatDate('2021-01-01', FORMAT_DATE.YYYY_MM_DD) => '2021/01/01'
 * @example formatDate('2021-01-01', FORMAT_DATE.YYYY_MM_DD_HH_MM_SS) => '2021/01/01 00:00:00'
 * @example formatDate('2021-01-01', FORMAT_DATE.YYYY_MM_DD_HH_MM) => '2021/01/01 00:00'
 * @example formatDate('2021-01-01') => '2021/01/01'
 * @example formatDate('2021-01-01', 'YYYY/MM/DD HH:mm:ss') => '2021/01/01 00:00:00'
 * @example formatDate('2021-01-01', 'YYYY/MM/DD HH:mm') => '2021/01/01 00:00'
 * */

export const formatDate = (date: any, format?: FORMAT_DATE) => {
  return moment(date).format(format ?? FORMAT_DATE.DD_MM_YYYY);
};
