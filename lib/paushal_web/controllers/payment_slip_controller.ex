defmodule PaushalWeb.PaymentSlipController do
  use PaushalWeb, :controller

  alias Paushal.PaymentSlips
  alias Paushal.PaymentSlips.PaymentSlip

  action_fallback PaushalWeb.FallbackController

  def index(conn, _params) do
    payment_slips = PaymentSlips.list_payment_slips()
    render(conn, "index.json", payment_slips: payment_slips)
  end

  def create(conn, %{"payment_slip" => payment_slip_params}) do
    with {:ok, %PaymentSlip{} = payment_slip} <-
           PaymentSlips.create_payment_slip(payment_slip_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.payment_slip_path(conn, :show, payment_slip))
      |> render("show.json", payment_slip: payment_slip)
    end
  end

  def show(conn, %{"id" => id}) do
    payment_slip = PaymentSlips.get_payment_slip!(id)
    render(conn, "show.json", payment_slip: payment_slip)
  end

  def update(conn, %{"id" => id, "payment_slip" => payment_slip_params}) do
    payment_slip = PaymentSlips.get_payment_slip!(id)

    with {:ok, %PaymentSlip{} = payment_slip} <-
           PaymentSlips.update_payment_slip(payment_slip, payment_slip_params) do
      render(conn, "show.json", payment_slip: payment_slip)
    end
  end

  def delete(conn, %{"id" => id}) do
    payment_slip = PaymentSlips.get_payment_slip!(id)

    with {:ok, %PaymentSlip{}} <- PaymentSlips.delete_payment_slip(payment_slip) do
      send_resp(conn, :no_content, "")
    end
  end
end
