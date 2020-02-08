import NumberType from './NumberType';

interface NumberMeta {
    name: string;
}

const NumberMetaMap: Map<NumberType, NumberMeta> = new Map([
    [ NumberType.Bic, { name: 'BIC' } ],
    [ NumberType.CreditCard, { name: 'Credit card' } ],
    [ NumberType.Cusip, { name: 'CUSIP' } ],
    [ NumberType.Cvv, { name: 'CVV' } ],
    [ NumberType.Ean, { name: 'EAN' } ],
    [ NumberType.Imei, { name: 'IMEI' } ],
    [ NumberType.Imo, { name: 'IMO' } ],
    [ NumberType.Isbn, { name: 'ISBN' } ],
    [ NumberType.Isin, { name: 'ISIN' } ],
    [ NumberType.Ismn, { name: 'ISMN' } ],
    [ NumberType.Issn, { name: 'ISSN' } ],
    [ NumberType.Npi, { name: 'NPI' } ],
    [ NumberType.Nric, { name: 'NRIC' } ],
    [ NumberType.Rtn, { name: 'RTN' } ],
    [ NumberType.Sedol, { name: 'SEDOL' } ],
    [ NumberType.Sin, { name: 'SIN' } ],
    [ NumberType.Ssn, { name: 'SSN' } ],
    [ NumberType.Vin, { name: 'VIN' } ],
]);

export default NumberMetaMap;
