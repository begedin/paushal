defmodule Paushal.Repo do
  use Ecto.Repo,
    otp_app: :paushal,
    adapter: Ecto.Adapters.Postgres
end
