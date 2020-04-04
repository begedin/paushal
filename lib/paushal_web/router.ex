defmodule PaushalWeb.Router do
  use PaushalWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PaushalWeb do
    pipe_through :api

    resources "/payment-slips", PaymentSlipController,
      only: [:index, :show, :create, :update, :delete]
  end
end
