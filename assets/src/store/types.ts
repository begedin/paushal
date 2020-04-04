export type PaymentSlip = {
  id: number;
  amount: number;
  date_of_execution: string | null;
  payer_iban: string | null;
  payer: string;
  payment_description: string;
  purpose_code: string | null;
  receiver_iban: string;
  receiver_model: string;
  receiver_reference_number: string | null;
  receiver: string;
};
