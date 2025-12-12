import React from 'react';
import DeliveryTruck from './DeliveryTruck.jsx';


function Food() {
  const products = [
    {
      name: 'MAMA PRIDE',
      sizes: ['50KG', '25KG', '10KG'],
      prices: [46900, 23500, 11800],
    },
    {
      name: 'MAMA AFRICA',
      sizes: ['50KG', '25KG', '10KG'],
      prices: [48600, 25100, 12900],
    },
    {
      name: 'MAMA GOLD',
      sizes: ['50KG', '25KG', '10KG'],
      prices: [47100, 23900, 11500],
    },
    {
      name: 'MAMA CHOICE',
      sizes: ['50KG', '25KG', '10KG'],
      prices: [47100, 23150, 11500],
    },
    {
      name: 'ROYAL AROMA',
      sizes: ['50KG', '25KG', '10KG'],
      prices: [43800, 21000, 13130],
    },
    {
      name: 'ROYAL FEAST',
      sizes: ['50KG', '25KG', '10KG'],
      prices: [42700, 20790, 12200],
    },
  ];

  return (
    <>
      
      <div className="p-5 border rounded-lg shadow-md overflow-x-auto">
        <table className="w-full border-collapse text-sm text-left text-gray-700">
          <thead>
            
            <tr className="bg-green-800 text-white font-bold border-b">
              <th className="px-4 py-3">BRAND NAME</th>
              <th className="px-4 py-3">BAG SIZE</th>
              <th className="px-4 py-3">NEW PRICE (₦)</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <React.Fragment key={index}>
                {product.sizes.map((size, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-2 hover:bg-gray-50 font-bold"
                  >
                    {idx === 0 && (
                      <td
                        rowSpan={product.sizes.length}
                        className="px-4 py-3 font-semibold align-middle bg-green-50"
                      >
                        {product.name}
                      </td>
                    )}
                    <td className="px-4 py-3 text-black">{size}</td>
                    <td className="px-4 py-3 text-black">
                      ₦{product.prices[idx].toLocaleString()}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    <DeliveryTruck />

    </>
  );
};

export default Food;
