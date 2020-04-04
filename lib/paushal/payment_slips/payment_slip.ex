defmodule Paushal.PaymentSlips.PaymentSlip do
  use Ecto.Schema
  import Ecto.Changeset

  schema "payment_slips" do
    field(:amount, :float, null: false)
    field(:auth_code, :string, null: false)
    field(:date_of_execution, :string, null: true)
    field(:payer_iban, :string, null: true)
    field(:payer, :string, null: false)
    field(:payment_description, :string, null: false)
    field(:purpose_code, :string, null: true)
    field(:receiver_iban, :string, null: false)
    field(:receiver_model, :string, null: false)
    field(:receiver_reference_number, :string, null: true)
    field(:receiver, :string, null: false)

    timestamps()
  end

  @doc false
  def changeset(payment_slip, attrs) do
    payment_slip
    |> cast(attrs, [
      :amount,
      :auth_code,
      :date_of_execution,
      :payer_iban,
      :payer,
      :payment_description,
      :purpose_code,
      :receiver_iban,
      :receiver_model,
      :receiver_reference_number,
      :receiver
    ])
    |> validate_required([
      :amount,
      :auth_code,
      :payer,
      :payment_description,
      :receiver_iban,
      :receiver_model,
      :receiver_reference_number,
      :receiver
    ])
  end
end
