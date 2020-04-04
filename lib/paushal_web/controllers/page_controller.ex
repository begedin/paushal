defmodule PaushalWeb.PageController do
  use PaushalWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
