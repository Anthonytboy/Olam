import photo from '../assets/photo_2025-12-11_09-41-11.jpg';
import Photo from '../assets/Photo.jpg';
import goats from '../assets/goats.jpg';
import White from '../assets/White.jpg';

function Chicken() {
  return (
    <>
      <div className="grid">
        <div className="shadow-lg shadow-gray-500 rounded-xl p-4 ">
          <img
            src={photo}
            alt=""
            className=" size-100 object-contain mx-auto"
          />

          <ul className="text-black font-medium space-y-5 text-center pt-5">
            <li>
              DOC broilers <span className="text-green-600">₦32,500</span>
            </li>
            <li>
              DOC pullets/layers <span className="text-green-600">₦82,500</span>
            </li>
            <li>
              DOC noilers <span className="text-green-600">₦35,000</span>
            </li>
            <li>
              DOC foreign turkey <span className="text-green-600">₦5,250</span>
            </li>
            <li>
              DOC local turkey <span className="text-green-600">₦1,950</span>
            </li>
          </ul>
        </div>

        <div className="shadow-lg shadow-gray-500 rounded-xl p-4 ">
          <img
            src={Photo}
            alt=""
            className=" size-100 object-contain mx-auto"
          />

          <ul className="text-black font-medium space-y-5 text-center pt-5">
            <p>
              {' '}
              Eggs available at wholesale/Farm Prices{' '}
              <span>Noted only bulk orders only</span>
            </p>
            <li>
              Jumbo Eggs <span className="text-green-600">₦4,000</span>
            </li>
            <li>
              Medium Eggs <span className="text-green-600">₦3,800</span>
            </li>
            <li>
              Small Eggs <span className="text-green-600">₦3,200</span>
            </li>
          </ul>
        </div>

        <div className="shadow-lg py-4 my-10 shadow-gray-500 rounded-xl p-4 text-center mx-auto">
          <h1 className="text-lg text-green-600 font-bold py-10">
            Kalahari Hybrid Goat
          </h1>

          <img
            src={goats}
            alt="goat"
            className="size-180 object-contain mx-auto"
          />

          <h1 className="text-lg text-green-600 font-bold py-10">Boar Goat</h1>

          <img
            src={White}
            alt="goat"
            className="size-180 object-contain mx-auto"
          />
        </div>
      </div>
    </>
  );
}

export default Chicken;
