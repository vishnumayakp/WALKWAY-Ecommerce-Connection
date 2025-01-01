import React, { useContext, useEffect, useState } from 'react'
import { createOrder, getAddressById, getCartById, setAddressDefault } from '../../../Api/Connection'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../USeContext/UserContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import axiosInstance from '../../../Api/axiosInstance'
import EditAddressForm from '../Address/EditAddress'
import EditAddress from '../Address/EditAddress'

function PaymentPage() {
  const [totalPrice, setTotalPrice] = useState(0)
  const [address, setAddress] = useState({})
  const [addressList, setAddressList] = useState([])
  const [showProduct, setShowproduct] = useState([])
    // const [isModal,setIsModal]=useState(false)
  const [payment, setPayment] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [raz,setRaz]=useState(null)
  const [isRazorPayLoaded, setIsRazorPayLoaded] = useState(false)

  // const openModal=()=>{
  //   setIsModal(true)
  // }

  // const closeModal=()=>{
  //   setIsModal(false)
  // }

  const token = localStorage.getItem('authToken')
  const navigate = useNavigate()
  const { setCartFlag } = useContext(AuthContext)

  useEffect(() => {
    if (token) {
      getCartById().then((res) => {
        if(res && res.cartItems && res.cartItems.length > 0){
          setShowproduct(res)
        }else {
          setShowproduct({ cartItems: [], totalItems: 0, grandTotal: 0 });
          toast.info('Your cart is empty');
        }
      }).catch((err) => {
        toast.error('Error fetching cart data')
        console.error(err)
      })

      getAddressById().then((res) => {
        if (res && res.length > 0) {
          setAddressList(res)
          const defaultAddress = res.find((address) => address.isDefaultAddress)
          setAddress(defaultAddress || res[0])
        }else {
          // Handle no address case
          setAddressList([]);
          setAddress(null);
          toast.info('No saved address found');
        }
      }).catch((err) => {
        console.error(err)
      })
    }
  }, [token])

  const handleChangeAddress = (e) => {
    const selectedId = e.target.value
    const selected = addressList.find((addr) => addr.addressId === selectedId)
    setAddress(selected)
    setAddressDefault(selectedId)
      .then(() => {
        console.log('Address set as default successfully')
      })
      getAddressById()
      .then((res)=>setAddress(res))
      .catch((err) => {
        console.error(err)
        toast.error('Failed to set address as default')
      })
  }

  useEffect(() => {
    loadRazorpayScript();
  }, []);
  
  const loadRazorpayScript = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => setIsRazorPayLoaded(true); // Set state to ensure script is loaded
    script.async = true;
    document.body.appendChild(script);
  };

  const initialPayment= async ()=>{

    if (addressList.length<=0) {
      toast.error('Please select an address');
      return;
    }

    if (!payment) {
      toast.error('Please select a payment method');
      return;
    }
    try{
      if(showProduct.grandTotal <= 0){
        alert("plaese enter a valid price");
        return;
      }


      const res=await axios.post(`https://localhost:7260/api/Order/CreateOrder?price=${showProduct.grandTotal}`,{},{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`
      }
      });
       const orderId=res.data;
       console.log(orderId);
       


      const options={
        key: "rzp_test_r8IxxuUt9hWcpL",
        amount: showProduct.grandTotal * 100, 
        currency: "INR",
        name: "WALKWAY",
        description: "Payment for my order",
        order_id: orderId,

        handler: async function (response) {
          console.log("Payment Response:", response);
          const paymentData = {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
          };
      
          try {
              // Verify the payment signature
              const paymentResponse = await axiosInstance.post(`https://localhost:7260/api/Order/payment`, paymentData, {
                  headers: {
                      Authorization: `Bearer ${localStorage.getItem("authToken")}`
                  }
              });
      
              console.log("Payment verification success:", paymentResponse);
      
              // If payment verification is successful, then place the order
              const placeOrderResponse = await axios.post('https://localhost:7260/api/Order/placeOrder', {
                  addressId: address.addressId,
                  totalamount: showProduct.grandTotal, // use showProduct.grandTotal
                  orderString: response.razorpay_order_id,
                  transactionId: response.razorpay_payment_id
              }, {
                  headers: {
                      Authorization: `Bearer ${localStorage.getItem("authToken")}`
                  }
              });
      
              console.log("Order placed successfully:", placeOrderResponse);
              toast.success("Order placed successfully!")
              getCartById()
              .then((res)=>setShowproduct(res))
      
          } catch (error) {
              console.error("Error during payment or order placement:", error);
              toast.error("Failed to place the order.");
          }
      }
      
         
      };
      const rzp1= new window.Razorpay(options);
      rzp1.open();

    }catch (error) {
      console.error("Error initiating payment: ", error);
      alert("Something went wrong during payment process.");
    }
  };

  

  return (
    <div className="md:flex w-full justify-between md:px-32 py-10">
      {/* Cart Section */}
      <div className="md:w-[80%] h-[36rem] flex justify-center p-5">
        <div className="h-[100%] w-full border rounded-lg shadow-lg overflow-hidden">
          <div className="space-y-6 h-[90%] overflow-y-auto p-4">
            {showProduct.cartItems && showProduct.cartItems.length > 0 ? (
              showProduct.cartItems.map((value) => (
                <div key={value.productId} className="flex justify-between items-center p-4 border-b">
                  <div className="w-[20%]">
                    <img className="h-20 w-full object-cover rounded-lg" src={value.image} alt={value.productName} />
                  </div>
                  <span className="w-[30%] font-semibold">{value.productName}</span>
                  <span className="w-[10%] text-center">{value.quantity}</span>
                  <span className="w-[15%] text-right text-gray-700 font-medium">₹{value.totalPrice}</span>
                </div>
              ))
            ) : (
              <h1 className="text-center text-gray-500">Your cart is empty</h1>
            )}
          </div>
        </div>
      </div>
  
      {/* Order Summary Section */}
      <div className="md:w-[45%] h-[38rem] flex flex-col justify-center p-5">
        <div className="h-[100%] w-full flex flex-col p-6 space-y-5 items-start border rounded-lg shadow-lg bg-white">
          <div className='flex gap-x-10'>
          <p className="font-bold text-xl">ORDER DETAILS</p>
          <button
        onClick={() => navigate('/profile')}
        className="bg-black text-white text-xs px-3 py-1 rounded hover:black transition"
      >
        Add Address
      </button>
          </div>
  
          {/* Address Section */}
          <div className="w-full border p-5 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h1 className="text-lg font-bold">Address</h1>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-black text-white text-xs px-3 py-1 rounded hover:bg-gray-800 transition"
              >
                {showDropdown ? 'Hide' : 'Change'}
              </button>
              {/* <button
                  // onClick={openModal}  // Navigate to profile page
                  className="bg-black text-white text-xs px-3 py-1 rounded hover:bg-gray-800  transition"
                >
                  Edit Address
                </button> */}
            </div>
            {showDropdown && addressList.length > 0 ? (
              <select
                onChange={handleChangeAddress}
                value={address?.addressId || ''}
                className="w-full p-2 mt-2 border rounded"
              >
                {addressList.map((addr) => (
                  <option key={addr.addressId} value={addr.addressId}>
                    {addr.fullName} - {addr.place}
                  </option>
                ))}
              </select>
            ) : (
              <div className="p-3 text-gray-700">
                {address ? (
                  <>
                    <h1>{address.fullName}</h1>
                    <h1>{address.houseName}</h1>
                    <h1>{address.place} {address.landMark}</h1>
                    <h1>{address.phoneNumber}</h1>
                    <h1>{address.postOffice} {address.pincode}</h1>
                  </>
                ) : (
                  <p>No address selected</p>
                )}
              </div>
            )}
          </div>
  
          {/* Price Summary */}
          <div className="w-full border p-5 rounded-lg shadow-sm">
            <div className="flex justify-between text-gray-600">
              <p>MRP ({showProduct.totalItems})</p>
              <p>₹{showProduct.grandTotal}</p>
            </div>
            <hr className="my-2 border-gray-300" />
            <div className="flex justify-between">
              <p className="font-semibold text-xl">Total</p>
              <p className="font-semibold text-xl">₹{showProduct.grandTotal}</p>
            </div>
          </div>
  
          {/* Payment Details Section */}
          <div className="w-full border p-5 rounded-lg shadow-sm">
            <div className="flex justify-center mb-2">
              <p className="font-bold text-lg">Payment Details</p>
            </div>
            <hr className="my-2 border-gray-300" />
            <div className="flex flex-col space-y-2">
              {/* <div className="flex items-center">
                <input onChange={() => setPayment('Cash on delivery')} name="payment" type="radio" />
                <label className="ml-2">Cash on delivery</label>
              </div> */}
              <div className="flex items-center">
                <input onChange={() => setPayment('Paypal')} name="payment" type="radio" />
                <label className="ml-2">Paypal</label>
              </div>
              <div className="flex items-center">
                <input onChange={() => setPayment('Upi')} name="payment" type="radio" />
                <label className="ml-2">UPI</label>
              </div>
              <div className="flex items-center">
                <input onChange={() => setPayment('Credit or Debit card')} name="payment" type="radio" />
                <label className="ml-2">Credit or Debit Card</label>
              </div>
            </div>
          </div>
  
          {/* Place Order Button */}
          <button
            onClick={initialPayment}
            className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
          >
            Place Order
          </button>
        </div>
      </div>
      {/* {isModal && <EditAddress closeModal={closeModal} addressData={setAddress}  />} */}
    </div>
  );
  
}

export default PaymentPage
