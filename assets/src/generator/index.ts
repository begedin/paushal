import PDF417 from 'pdf417-generator';
import { PaymentParams } from '@/generator/types';
import { validatePaymentParams } from '@/generator/validatePaymentParams';
import { padLeft } from '@/generator/utils';

const delimiter = String.fromCharCode(0x0a);
const header = 'HRVHUB30';
const currency = 'HRK';
const paymentModelPrefix = 'HR';

const encodePrice = (price: string) => {
  return padLeft(price.replace(',', ''), 15, '0');
};

const encodeData = (paymentParams: PaymentParams) =>
  [
    header,
    delimiter,
    currency,
    delimiter,
    encodePrice(paymentParams.Iznos),
    delimiter,
    paymentParams.ImePlatitelja,
    delimiter,
    paymentParams.AdresaPlatitelja,
    delimiter,
    paymentParams.SjedistePlatitelja,
    delimiter,
    paymentParams.Primatelj,
    delimiter,
    paymentParams.AdresaPrimatelja,
    delimiter,
    paymentParams.SjedistePrimatelja,
    delimiter,
    paymentParams.IBAN,
    delimiter,
    paymentModelPrefix,
    paymentParams.ModelPlacanja,
    delimiter,
    paymentParams.PozivNaBroj,
    delimiter,
    paymentParams.SifraNamjene,
    delimiter,
    paymentParams.OpisPlacanja,
    delimiter,
  ]
    .filter((s) => typeof s !== 'undefined')
    .join('');

const getContent = (content: string): HTMLCanvasElement => {
  const canvas = document.createElement('canvas');
  canvas.width = 300;
  canvas.height = 150;
  PDF417.draw(content, canvas);
  return canvas;
};

export const generate2DBarcode = (params: PaymentParams) => {
  const [valid, errors] = validatePaymentParams(params);
  return {
    valid,
    errors,
    canvas: valid ? getContent(encodeData(params)) : null,
  };
};
