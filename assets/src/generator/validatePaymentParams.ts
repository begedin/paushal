import { getLength, isEmpty } from './utils';
import { validateIntentCode } from './validateIntentCode';
import { validateReferenceNumber } from './validateReferenceNumber';
import { PaymentParams } from './types';

const MaxLengths = {
  Price: 16,
  PayerName: 30,
  PayerAddress: 27,
  PayerHQ: 27,
  ReceiverName: 25,
  ReceiverAddress: 25,
  ReceiverHQ: 27,
  IBAN: 21,
  PaymentModel: 2,
  CalloutNumber: 22,
  IntentCode: 4,
  Description: 35,
};

const pricePattern = '^[0-9]+,[0-9]{2}$';

type ValidationError = { key: keyof PaymentParams; message: string };

export const validatePaymentParams = (
  paymentParams: PaymentParams
): [boolean, ValidationError[]] => {
  let errors: ValidationError[] = [];

  const fieldLength = getLength(paymentParams.Iznos);
  if (fieldLength > MaxLengths.Price) {
    errors.push({ key: 'Iznos', message: 'Value too long' });
  }

  if (
    !isEmpty(paymentParams.Iznos) &&
    (fieldLength == -1 || paymentParams.Iznos.match(pricePattern) == null)
  ) {
    errors.push({ key: 'Iznos', message: 'Invalid' });
  }

  if (getLength(paymentParams.ImePlatitelja) > MaxLengths.PayerName) {
    errors.push({ key: 'ImePlatitelja', message: 'Value too long' });
  }

  if (!isEmpty(paymentParams.ImePlatitelja) && fieldLength == -1) {
    errors.push({ key: 'ImePlatitelja', message: 'Cannot be empty' });
  }

  if (getLength(paymentParams.AdresaPlatitelja) > MaxLengths.PayerAddress) {
    errors.push({ key: 'AdresaPlatitelja', message: 'Value too long' });
  }

  if (isEmpty(paymentParams.AdresaPlatitelja)) {
    errors.push({ key: 'AdresaPlatitelja', message: 'Cannot be empty' });
  }

  if (getLength(paymentParams.SjedistePlatitelja) >= MaxLengths.PayerHQ) {
    errors.push({ key: 'SjedistePlatitelja', message: 'Value too long' });
  }

  if (isEmpty(paymentParams.SjedistePlatitelja)) {
    errors.push({ key: 'SjedistePlatitelja', message: 'Cannot be empty' });
  }

  if (getLength(paymentParams.Primatelj) >= MaxLengths.ReceiverName) {
    errors.push({ key: 'Primatelj', message: 'Value too long' });
  }

  if (isEmpty(paymentParams.Primatelj)) {
    errors.push({ key: 'Primatelj', message: 'Cannot be empty' });
  }

  if (getLength(paymentParams.AdresaPrimatelja) >= MaxLengths.ReceiverAddress) {
    errors.push({ key: 'AdresaPrimatelja', message: 'Value too long' });
  }

  if (isEmpty(paymentParams.AdresaPrimatelja)) {
    errors.push({ key: 'AdresaPrimatelja', message: 'Cannot be empty' });
  }

  if (getLength(paymentParams.SjedistePrimatelja) >= MaxLengths.ReceiverHQ) {
    errors.push({ key: 'SjedistePrimatelja', message: 'Value too long' });
  }

  if (isEmpty(paymentParams.SjedistePrimatelja)) {
    errors.push({ key: 'SjedistePrimatelja', message: 'Cannot be empty' });
  }

  if (getLength(paymentParams.IBAN) >= MaxLengths.IBAN) {
    errors.push({ key: 'IBAN', message: 'Value too long' });
  }

  if (isEmpty(paymentParams.IBAN)) {
    errors.push({ key: 'IBAN', message: 'Cannot be empty' });
  }

  if (getLength(paymentParams.ModelPlacanja) >= MaxLengths.PaymentModel) {
    errors.push({ key: 'ModelPlacanja', message: 'Value too long' });
  }

  if (isEmpty(paymentParams.ModelPlacanja)) {
    errors.push({ key: 'ModelPlacanja', message: 'Cannot be empty' });
  }

  if (getLength(paymentParams.PozivNaBroj) >= MaxLengths.CalloutNumber) {
    errors.push({ key: 'PozivNaBroj', message: 'Value too long' });
  }

  if (isEmpty(paymentParams.PozivNaBroj)) {
    errors.push({ key: 'PozivNaBroj', message: 'Cannot be empty' });
  }

  if (
    !validateReferenceNumber(
      paymentParams.PozivNaBroj,
      paymentParams.ModelPlacanja
    )
  ) {
    errors.push({ key: 'PozivNaBroj', message: 'Invalid' });
  }

  if (getLength(paymentParams.SifraNamjene) >= MaxLengths.IntentCode) {
    errors.push({ key: 'SifraNamjene', message: 'Value too long' });
  }

  if (isEmpty(paymentParams.SifraNamjene)) {
    errors.push({ key: 'SifraNamjene', message: 'Cannot be empty' });
  }

  if (!validateIntentCode(paymentParams.SifraNamjene)) {
    errors.push({ key: 'SifraNamjene', message: 'Invalid' });
  }

  if (getLength(paymentParams.OpisPlacanja) >= MaxLengths.Description) {
    errors.push({ key: 'OpisPlacanja', message: 'Value too long' });
  }

  if (isEmpty(paymentParams.OpisPlacanja)) {
    errors.push({ key: 'OpisPlacanja', message: 'Cannot be empty' });
  }

  return [errors.length > 0, errors];
};
