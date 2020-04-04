defmodule Paushal.PaymentSlips do
  @moduledoc """
  The PaymentSlips context.
  """

  import Ecto.Query, warn: false
  alias Paushal.Repo

  alias Paushal.PaymentSlips.PaymentSlip

  @doc """
  Returns the list of payment_slips.

  ## Examples

      iex> list_payment_slips()
      [%PaymentSlip{}, ...]

  """
  def list_payment_slips do
    Repo.all(PaymentSlip)
  end

  @doc """
  Gets a single payment_slip.

  Raises `Ecto.NoResultsError` if the Payment slip does not exist.

  ## Examples

      iex> get_payment_slip!(123)
      %PaymentSlip{}

      iex> get_payment_slip!(456)
      ** (Ecto.NoResultsError)

  """
  def get_payment_slip!(id), do: Repo.get!(PaymentSlip, id)

  @doc """
  Creates a payment_slip.

  ## Examples

      iex> create_payment_slip(%{field: value})
      {:ok, %PaymentSlip{}}

      iex> create_payment_slip(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_payment_slip(attrs \\ %{}) do
    %PaymentSlip{}
    |> PaymentSlip.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a payment_slip.

  ## Examples

      iex> update_payment_slip(payment_slip, %{field: new_value})
      {:ok, %PaymentSlip{}}

      iex> update_payment_slip(payment_slip, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_payment_slip(%PaymentSlip{} = payment_slip, attrs) do
    payment_slip
    |> PaymentSlip.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a payment_slip.

  ## Examples

      iex> delete_payment_slip(payment_slip)
      {:ok, %PaymentSlip{}}

      iex> delete_payment_slip(payment_slip)
      {:error, %Ecto.Changeset{}}

  """
  def delete_payment_slip(%PaymentSlip{} = payment_slip) do
    Repo.delete(payment_slip)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking payment_slip changes.

  ## Examples

      iex> change_payment_slip(payment_slip)
      %Ecto.Changeset{source: %PaymentSlip{}}

  """
  def change_payment_slip(%PaymentSlip{} = payment_slip) do
    PaymentSlip.changeset(payment_slip, %{})
  end
end
