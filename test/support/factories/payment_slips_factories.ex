defmodule Paushal.Factories.PaymentSlipFactories do
  # with Ecto
  use ExMachina.Ecto, repo: Paushal.Repo

  def payment_slip_factory do
    %Paushal.PaymentSlips.PaymentSlip{
      amount: 100,
      auth_code: sequence(:auth_code, &"auth_code#{&1}"),
      payer: sequence(:payer, &"Random payer ##{&1} with a fake address"),
      payment_description: sequence(:payment_description, &"Payment for reason ##{&1}"),
      receiver_iban: sequence(:receiver_iban, &"HR68236000000#{&1}"),
      receiver: sequence(:receiver, &"Random receiver ##{&1} with a fake address"),
      receiver_model: "HR01",
      receiver_reference_number: "123456789"
    }
  end
end
