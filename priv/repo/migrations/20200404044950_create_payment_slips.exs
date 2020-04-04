defmodule Paushal.Repo.Migrations.CreatePaymentSlips do
  use Ecto.Migration

  def change do
    create table(:payment_slips) do
      add(:amount, :float, null: false)
      add(:auth_code, :string, null: false)
      add(:date_of_execution, :string, null: true)
      add(:payer_iban, :string, null: true)
      add(:payer, :text, null: false)
      add(:payment_description, :text, null: false)
      add(:purpose_code, :string, null: true)
      add(:receiver_iban, :string, null: false)
      add(:receiver_model, :string, null: false)
      add(:receiver_reference_number, :string, null: true)
      add(:receiver, :text, null: false)
      timestamps()
    end
  end
end
