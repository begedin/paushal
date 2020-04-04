defmodule PaushalWeb.Router do
  use PaushalWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PaushalWeb do
    pipe_through :api

    resources "/payment-slips", PaymentSlipController,
      only: [:index, :show, :create, :update, :delete]
  end

  scope "/", PaushalWeb do
    pipe_through :browser

    get "/", PageController, :index
  end
end
