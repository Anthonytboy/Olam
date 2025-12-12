import React from 'react';

const Introduction = () => {
  return (
    <div className=" space-y-10 shadow-lg p-5 my-5 rounded-xl shadow-gray-400">
      <p className="font-medium">
        <span className="font-bold text-xl">OLAM NIGERIA LIMITED</span>, We
        manufacture and distribute packaged food products to African markets,
        addressing localised nutrition needs by offering affordable and
        fortified products. We offer good quality, inexpensive feed, and
        day-old-chicks to farmers, which also contributes to foods security.
      </p>
      <p className="font-medium">
        Our mill farm produces 36,000 metric tonnes of rice for local markets
        under brands such as Mama’s Pride and Mama’s Choice.
      </p>
      <p className="font-medium text-xl">DELIVERY POSSIBILITY!!!</p>
      <p className="font-bold text-xl">
        Purchase Permit Order (P.P.O) from Olam Nigeria Limited & Local
        Government Approval.
      </p>

      <div className="space-y-5">
        <p className="font-bold text-xl">
          ⬇️GOODS PURCHASE PARTNERSHIP OPTIONS⬇️
        </p>

        <p className="font-medium text-md">
          Please take note, <br /> The required fee for this operation, is
          ₦,780,780 for Major distributorship Registration
        </p>
        <p className="font-medium text-md">
          {' '}
          ₦75,780 for Retailers / Farmers Registration
        </p>

        <p className="font-medium text-md">
          {' '}
          ₦35,780 for End users or consumers Registration.{' '}
        </p>
      </div>

      <div className="space-y-5">
        <p className="font-bold text-xl">⬇️SERVICE PARTNERSHIP OPTIONS⬇️</p>

        <p className="font-medium text-md">
          ₦185,000 For Raw material suppliers Registration,
        </p>
        <p className="font-medium text-md ">
          ₦225,000 For Services Registration,
        </p>

        <p className="font-medium text-md">
          NOTE: Registration fee must be remitted before proceeding with the
          enrollment and filling of this form below!
        </p>
      </div>
    </div>
  );
};

export default Introduction;
