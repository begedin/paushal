defmodule PaushalWeb.PaymentSlipView do
  use PaushalWeb, :view
  alias PaushalWeb.PaymentSlipView

  def render("index.json", %{payment_slips: payment_slips}) do
    %{data: render_many(payment_slips, PaymentSlipView, "payment_slip.json")}
  end

  def render("show.json", %{payment_slip: payment_slip}) do
    %{data: render_one(payment_slip, PaymentSlipView, "payment_slip.json")}
  end

  def render("payment_slip.json", %{payment_slip: payment_slip}) do
    %{id: payment_slip.id}
  end
end
