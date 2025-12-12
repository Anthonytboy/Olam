import React from 'react';

function Poultry() {
  const products = [
    // Layer Feeds
    {
      name: 'Layer Feeds (SS, SE)',
      sizes: [
        'Chikun Chick Mash',
        'Chikun Chick Pellet',
        'Chikun Grower Mash',
        'Chikun Grower Pellet',
        'Chikun Layer -1 Mash',
        'Chikun Layer -2 Mash',
      ],
      increase: [150, 150, 150, 150, 150, 150],
      prices: [14700, 14660, 14650, 14630, 14600, 14580],
    },

    // Broiler Feeds
    {
      name: 'Broiler Feeds (SS, SE)',
      sizes: [
        'Chikun Super Starter Mash',
        'Chikun Super Starter Pellet',
        'Chikun Stater Mash',
        'Chikun Stater Pellet',
        'Chikun Finisher Mash',
        'Chikun Super Starter Pellet',
        'Ultima Super Starter Pellet',
        'Ultima Stater Pellet',
        'Ultima Finisher Pellet',
      ],
      increase: [200, 300, 200, 300, 200, 300, 350, 350, 350],
      prices: [15150, 15130, 15120, 15115, 15135, 15150, 21200, 21170, 21200],
    },

    // Super Premium Broiler Feeds
    {
      name: 'Super Premium Broiler Feeds (SS, SE)',
      sizes: [
        'Ultima Plus Super Starter',
        'Ultima Plus Starter',
        'Ultima Plus Finisher',
      ],
      increase: [400, 400, 400],
      prices: [21400, 21400, 21400],
    },
  ];

  return (
    <>
    <div className="p-5 border rounded-lg shadow-md overflow-x-auto">
      <table className="w-full border-collapse text-sm text-left text-gray-700">
        <thead>
          <tr className="bg-green-900 text-white font-bold border-b rounded-lg">
            <th className="px-4 py-3">FEED TYPE</th>
            <th className="px-4 py-3">DESCRIPTION</th>
            <th className="px-4 py-3">INCREASE</th>
            <th className="px-4 py-3"> NEW PRICE (₦)</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <React.Fragment key={index}>
              {product.sizes.map((size, idx) => (
                <tr
                  key={idx}
                  className="border-b border-2 border-gray-500 hover:bg-gray-50 font-bold text-black"
                >
                  {idx === 0 && (
                    <td
                      rowSpan={product.sizes.length}
                      className="px-4 py-3 font-semibold align-middle bg-green-50"
                    >
                      {product.name}
                    </td>
                  )}

                  <td className="px-4 py-3">{size}</td>

                  <td className="px-4 py-3 text-black">{product.increase[idx]}</td>

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
      </>
  );
};

export default Poultry;
