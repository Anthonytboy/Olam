import photo from '../assets/photo_2025-12-11_09-41-11.jpg';
import Photo from '../assets/Photo.jpg';
import goats from '../assets/goats.jpg';
import white from '../assets/white.jpg';
import DeliveryTruck from './DeliveryTruck';

function Chicken() {
  return (
    <>
      <DeliveryTruck />
      <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10 md:gap-20 px-5 md:px-0 max-w-6xl w-full mx-auto my-10 shadow-lg shadow-gray-500 mx-4 ">
        <div className="rounded-xl p-4 ">
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

        <div className="rounded-xl p-4 ">
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

        <div className="flex sm:flex-col md:flex-row max-w-xl gap-5 shadow-lg py-4 my-10 shadow-gray-500 rounded-xl p-4 text-center mx-auto">
          <div className='space-y-5'>
            <h1 className="text-lg text-green-600 font-bold">
              Kalahari Hybrid Goat
            </h1>

            <img
              src={goats}
              alt="goat"
              className=" object-contain mx-auto "
            />
          </div>

          <div className='space-y-5'>
            <h1 className="text-lg text-green-600 font-bold ">Boar Goat</h1>

            <img
              src={white}
              alt="goat"
              className=" object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chicken;
