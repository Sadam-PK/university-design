import classImage1 from "../../../assets/class-img1.jpg";
import classImage2 from "../../../assets/class-img2.jpg";
import classImage3 from "../../../assets/class-img3.jpg";

export default function Section5() {
  return (
    <div className="px-5 sm:px-16 pb-10 sm:py-20">
      <div className="flex flex-col sm:flex-row justify-between py-7 items-center">
        <h2 className="font-extrabold text-3xl text-gray-800"> TOP STORIES</h2>
        <a href="#" className="pt-3 underline text-emerald-700 hidden sm:block">
          More Stories
        </a>
      </div>
      <div
        className="flex flex-col sm:flex-row gap-5 sm:text-2xl text-center
       text-gray-800"
      >
        <div>
          <div>
            <img src={classImage1} alt="" />
          </div>
          <div className="p-5  hover:text-emerald-600">
            <a href="#">
              Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories
            </a>
          </div>
        </div>

        <div>
          <div>
            <img src={classImage2} alt="" />
          </div>
          <div className="p-5  hover:text-emerald-600">
            <a href="#">
              Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories
            </a>
          </div>
        </div>

        <div>
          <div className="">
            <img src={classImage3} alt="" />
          </div>
          <div className="p-5  hover:text-emerald-600">
            <a href="#">
              Linguistics alumna says recognizing Indigenous Languages Day is
              crucial to our histories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
