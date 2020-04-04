defmodule PaushalWeb.PaymentSlipControllerTest do
  use PaushalWeb.ConnCase

  alias Paushal.PaymentSlips.PaymentSlip

  @create_attrs %{
    amount: 100,
    auth_code: "auth_code_valid",
    payer: "Random payer #X with a fake address",
    payment_description: "Payment for reason #X",
    receiver_iban: "HR682360000000",
    receiver: "Random receiver #X with a fake address",
    receiver_model: "HR01",
    receiver_reference_number: "123456789"
  }
  @update_attrs Map.delete(@create_attrs, :auth_code)
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

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all payment_slips", %{conn: conn} do
      path = Routes.payment_slip_path(conn, :index)
      conn = get(conn, path)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create payment_slip" do
    test "renders payment_slip when data is valid", %{conn: conn} do
      path = Routes.payment_slip_path(conn, :create)

      conn = post(conn, path, payment_slip: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      path = Routes.payment_slip_path(conn, :show, id)
      conn = get(conn, path)

      assert %{"id" => id} = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.payment_slip_path(conn, :create), payment_slip: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update payment_slip" do
    setup [:create_payment_slip]

    test "renders payment_slip when data is valid", %{
      conn: conn,
      payment_slip: %PaymentSlip{id: id} = payment_slip
    } do
      conn =
        put(conn, Routes.payment_slip_path(conn, :update, payment_slip),
          payment_slip: @update_attrs
        )

      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.payment_slip_path(conn, :show, id))

      assert %{
               "id" => id
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, payment_slip: payment_slip} do
      conn =
        put(conn, Routes.payment_slip_path(conn, :update, payment_slip),
          payment_slip: @invalid_attrs
        )

      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete payment_slip" do
    setup [:create_payment_slip]

    test "deletes chosen payment_slip", %{conn: conn, payment_slip: payment_slip} do
      conn = delete(conn, Routes.payment_slip_path(conn, :delete, payment_slip))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.payment_slip_path(conn, :show, payment_slip))
      end
    end
  end

  defp create_payment_slip(_) do
    payment_slip = insert(:payment_slip)
    {:ok, payment_slip: payment_slip}
  end
end
