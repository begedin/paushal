defmodule Paushal.PaymentSlipsTest do
  use Paushal.DataCase

  alias Paushal.PaymentSlips

  describe "payment_slips" do
    alias Paushal.PaymentSlips.PaymentSlip

    @valid_attrs %{
      amount: 100,
      auth_code: "auth_code_valid",
      payer: "Random payer #X with a fake address",
      payment_description: "Payment for reason #X",
      receiver_iban: "HR682360000000",
      receiver: "Random receiver #X with a fake address",
      receiver_model: "HR01",
      receiver_reference_number: "123456789"
    }
    @update_attrs Map.delete(@valid_attrs, :auth_code)
    @invalid_attrs %{
      amount: nil,
      auth_code: nil,
      payer: nil,
      payment_description: nil,
      receiver_iban: nil,
      receiver: nil,
      receiver_model: nil,
      receiver_reference_number: nil
    }

    def payment_slip_fixture(attrs \\ %{}) do
      insert(:payment_slip, attrs)
    end

    test "list_payment_slips/0 returns all payment_slips" do
      payment_slip = payment_slip_fixture()
      assert PaymentSlips.list_payment_slips() == [payment_slip]
    end

    test "get_payment_slip!/1 returns the payment_slip with given id" do
      payment_slip = payment_slip_fixture()
      assert PaymentSlips.get_payment_slip!(payment_slip.id) == payment_slip
    end

    test "create_payment_slip/1 with valid data creates a payment_slip" do
      assert {:ok, %PaymentSlip{} = payment_slip} = PaymentSlips.create_payment_slip(@valid_attrs)
    end

    test "create_payment_slip/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = PaymentSlips.create_payment_slip(@invalid_attrs)
    end

    test "update_payment_slip/2 with valid data updates the payment_slip" do
      payment_slip = payment_slip_fixture()

      assert {:ok, %PaymentSlip{} = payment_slip} =
               PaymentSlips.update_payment_slip(payment_slip, @update_attrs)
    end

    test "update_payment_slip/2 with invalid data returns error changeset" do
      payment_slip = payment_slip_fixture()

      assert {:error, %Ecto.Changeset{}} =
               PaymentSlips.update_payment_slip(payment_slip, @invalid_attrs)

      assert payment_slip == PaymentSlips.get_payment_slip!(payment_slip.id)
    end

    test "delete_payment_slip/1 deletes the payment_slip" do
      payment_slip = payment_slip_fixture()
      assert {:ok, %PaymentSlip{}} = PaymentSlips.delete_payment_slip(payment_slip)
      assert_raise Ecto.NoResultsError, fn -> PaymentSlips.get_payment_slip!(payment_slip.id) end
    end

    test "change_payment_slip/1 returns a payment_slip changeset" do
      payment_slip = payment_slip_fixture()
      assert %Ecto.Changeset{} = PaymentSlips.change_payment_slip(payment_slip)
    end
  end
end
