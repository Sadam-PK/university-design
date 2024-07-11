import classImage1 from "../../../assets/class-img1.jpg";
import classImage2 from "../../../assets/class-img2.jpg";
import classImage3 from "../../../assets/class-img3.jpg";

export default function Section5() {
  return (
    <div className="px-16">
      <div className="flex flex-row justify-between">
        <h2>TOP STORIES</h2>
        <a href="#" className="underline">
          More Stories
        </a>
      </div>
      <div className="flex flex-row gap-5 text-2xl text-center text-gray-800">
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
