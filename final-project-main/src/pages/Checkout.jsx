import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({ setOrder }) => {
  const [billingToogle, setBillingToggle] = useState(true);
  const [shoppingToogle, setShoppingToggle] = useState(false);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  // Billing Info State
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Shopping Info State
  const [shoppingInfo, setShoppingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  // Payment Info State
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardHolderName: "",
    expireDate: "",
    cvv: "",
  });

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  // Function to validate and handle order submission
  const handleOrder = () => {
    // Check if all required fields are filled
    if (
      !billingInfo.name ||
      !billingInfo.email ||
      !billingInfo.phone ||
      !shoppingInfo.address ||
      !shoppingInfo.city ||
      !shoppingInfo.zip ||
      (paymentMethod === "dc" && // Validate card details if payment is Debit Card
        (!cardInfo.cardNumber ||
          !cardInfo.cardHolderName ||
          !cardInfo.expireDate ||
          !cardInfo.cvv))
    ) {
      alert("Error: All fields are required!");
      return;
    }

    // If all fields are valid, show success message
    alert("Your order has been placed successfully!");
    // Optionally navigate to another page or reset form
    setOrder(cart); // Set order (optional logic)
    navigate("/"); // Navigate to a success page (if you have one)
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold md:m-4"> CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          {/* Billing Information */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setBillingToggle(!billingToogle)}
            >
              <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
              {billingToogle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToogle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-full px-3 py-2 border"
                  value={billingInfo.name}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full px-3 py-2 border"
                  value={billingInfo.email}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input
                  type="text"
                  placeholder="Enter Phone #"
                  className="w-full px-3 py-2 border"
                  value={billingInfo.phone}
                  onChange={(e) =>
                    setBillingInfo({ ...billingInfo, phone: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Shopping Information */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setShoppingToggle(!shoppingToogle)}
            >
              <h3 className="text-lg font-semibold mb-2">Shopping Information</h3>
              {shoppingToogle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shoppingToogle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  className="w-full px-3 py-2 border"
                  value={shoppingInfo.address}
                  onChange={(e) =>
                    setShoppingInfo({ ...shoppingInfo, address: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">City</label>
                <input
                  type="text"
                  placeholder="Enter City"
                  className="w-full px-3 py-2 border"
                  value={shoppingInfo.city}
                  onChange={(e) =>
                    setShoppingInfo({ ...shoppingInfo, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-700">Zip Code</label>
                <input
                  type="text"
                  placeholder="Enter Zip Code"
                  className="w-full px-3 py-2 border"
                  value={shoppingInfo.zip}
                  onChange={(e) =>
                    setShoppingInfo({ ...shoppingInfo, zip: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="block text-gray-700 ml-2">Cash on Delivery</label>
              </div>

              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="block text-gray-700 ml-2">Debit Card</label>
              </div>

              {paymentMethod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">Debit Card Information</h3>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter card number"
                      className="border p-2 w-full rounded"
                      value={cardInfo.cardNumber}
                      onChange={(e) =>
                        setCardInfo({ ...cardInfo, cardNumber: e.target.value })
                      }
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter card holder name"
                      className="border p-2 w-full rounded"
                      value={cardInfo.cardHolderName}
                      onChange={(e) =>
                        setCardInfo({ ...cardInfo, cardHolderName: e.target.value })
                      }
                    />
                  </div>

                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Expire Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border p-2 w-full rounded"
                        value={cardInfo.expireDate}
                        onChange={(e) =>
                          setCardInfo({ ...cardInfo, expireDate: e.target.value })
                        }
                      />
                    </div>

                    <div className="w-1/2 ml-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="CVV"
                        className="border p-2 w-full rounded"
                        value={cardInfo.cvv}
                        onChange={(e) =>
                          setCardInfo({ ...cardInfo, cvv: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold">{product.name}</h4>
                    <p className="text-gray-600">
                      &{product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">${product.price * product.quantity}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
