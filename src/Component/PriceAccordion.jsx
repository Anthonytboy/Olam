import React from 'react';

function PriceAccordion() {
  const products = [
  {
    name: 'MAMA GOLD FLOUR',
    sizes: ['50kg', '25kg', '10kg'],
    prices: [56400, 29000, 11250],
  },
  {
    name: 'MIX & BAKE SUPERB FLOUR',
    sizes: ['50kg', '25kg', '10kg'],
    prices: [54000, 26700, 2650],
  },
  {
    name: 'BAKEWELL FLOUR',
    sizes: ['50kg', '25kg', '10kg'],
    prices: [53500, 25800, 2575],
  },
  {
    name: 'SUPREME LITE FLOUR',
    sizes: ['50kg', '25kg', '10kg'],
    prices: [51000, 25000, 5270],
  },
  {
    name: 'BUA & CROWN PREMIUM FLOUR',
    sizes: ['50kg', '25kg', '10kg'],
    prices: [52300, 26000, 10500],
  },
];

  return (
    <div className="p-5 border rounded-lg shadow-md overflow-x-auto">
      <table className="w-full border-collapse text-sm text-left text-gray-700">
        <thead>
          <tr className="bg-lime-900 text-white font-bold border-b">
            <th className="px-4 py-3">PRODUCT BRAND</th>
            <th className="px-4 py-3">BAG SIZE</th>
            <th className="px-4 py-3">PRICE (₦)</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <React.Fragment key={index}>
              {product.sizes.map((size, sizeIndex) => (
                <tr
                  key={sizeIndex}
                  className="border-b border-2 border-gray-400 hover:bg-lime-800 font-bold bg-lime-900"
                >
                  {sizeIndex === 0 && (
                    <td
                      rowSpan={product.sizes.length}
                      className="px-4 py-3 font-semibold align-middle bg-lime-900 text-white"
                    >
                      {product.name}
                    </td>
                  )}

                  <td className="px-4 py-3 font-bold text-white">{size}</td>
                  <td className="px-4 py-3 font-bold text-white">
                    ₦{product.prices[sizeIndex].toLocaleString()}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceAccordion;
