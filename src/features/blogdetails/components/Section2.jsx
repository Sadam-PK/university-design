import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import singleBlog1 from "../../../assets/single_blog_1.jpg.webp";
import { faComment, faUser } from "@fortawesome/free-regular-svg-icons";
import sendButton from "../../../assets/Icon-send.svg";
import post1 from "../../../assets/post_1.jpg.webp";
import post2 from "../../../assets/post_2.jpg.webp";
import post3 from "../../../assets/post_3.jpg.webp";
import post4 from "../../../assets/post_4.jpg.webp";
import post5 from "../../../assets/post_5.jpg.webp";
import post6 from "../../../assets/post_6.jpg.webp";
import post7 from "../../../assets/post_7.jpg.webp";
import post8 from "../../../assets/post_8.jpg.webp";
import post9 from "../../../assets/post_9.jpg.webp";
import post10 from "../../../assets/post_10.jpg.webp";
import next from "../../../assets/next.jpg.webp";
import prev from "../../../assets/preview.jpg.webp";
import author from "../../../assets/author.png.webp";
import comment1 from "../../../assets/comment_1.png.webp";
import comment2 from "../../../assets/comment_2.png.webp";
import comment3 from "../../../assets/comment_3.png.webp";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import {
  faTwitter,
  faXbox,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Section2() {
  return (
    <div className="grid grid-cols-12 px-28 py-20 gap-10">
      {/* ------ left side ---------- */}

      <div className="col-span-8 -z-10">
        <div className="col-span-8">
          <div className="relative">
            <img src={singleBlog1} alt="" className="" />
          </div>

          <div className="py-5">
            <a href="#">
              <h2 className="py-5 font-bold text-2xl text-gray-800">
                Second divided from form fish beast made every of seas all
                gathered us saying he our
              </h2>

              <ul className="flex flex-row items-center gap-2 py-5 text-gray-500 text-sm">
                <li>
                  <FontAwesomeIcon icon={faUser} />
                </li>
                <li>
                  <a href="#" className="flex flex-row items-center gap-2">
                    Travel, Lifestyle
                    <h1>|</h1>
                    <FontAwesomeIcon icon={faComment} />
                    03 Comments
                  </a>
                </li>
                <li></li>
              </ul>
            </a>
            <p className="leading-loose text-gray-600">
              MCSE boot camps have its supporters and its detractors. Some
              people do not understand why you should have to spend money on
              boot camp when you can get the MCSE study materials yourself at a
              fraction of the camp price. However, who has the willpower
            </p>
            <p className="leading-loose text-gray-600 pt-5">
              MCSE boot camps have its supporters and its detractors. Some
              people do not understand why you should have to spend money on
              boot camp when you can get the MCSE study materials yourself at a
              fraction of the camp price. However, who has the willpower to
              actually sit through a self-imposed MCSE training. who has the
              willpower to actually.
            </p>
          </div>
        </div>

        {/* ------- quote div ------- */}

        <div className="bg-gray-100 p-5">
          <blockquote className="p-5 bg-white italic text-gray-600 border-l-2 border-gray-400">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower to actually sit
            through a self-imposed MCSE training.
          </blockquote>
        </div>
        <div className="py-5 font-semibold border-b border-gray-200">
          <p className="leading-loose text-gray-600">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower
          </p>
          <p className="leading-loose text-gray-600 pt-5">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower to actually sit
            through a self-imposed MCSE training. who has the willpower to
            actually.
          </p>
        </div>
        {/* ----------soical---------- */}

        <div>
          <div className="flex flex-row justify-between">
            <a href="#">
              <ul
                className="flex flex-row items-center gap-2 py-5
               text-gray-500 text-sm"
              >
                <li>
                  <FontAwesomeIcon icon={faHeart} />
                </li>
                <li>
                  <a href="#" className="flex flex-row items-center gap-2">
                    Lily and 4 people like this
                  </a>
                </li>
              </ul>
            </a>
            <ul className="flex flex-row space-x-5 py-5 text-gray-500">
              <li className="text-xl">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="text-xl">
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="text-xl">
                <a href="#">
                  <FontAwesomeIcon icon={faXbox} />
                </a>
              </li>
              <li className="text-xl">
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="text-gray-500">
            
          </div> */}
        </div>

        {/* ----------prev next---------- */}

        <div className="flex flex-row justify-between border-b py-10">
          <div className="flex flex-row items-center">
            <img src={next} alt="" />

            <div className="pl-3">
              <h2>Prev Post</h2>
              <a href="#">
                <p className="font-semibold hover:bg-emerald-600">
                  Space The Final Frontier
                </p>
              </a>
            </div>
          </div>

          <div className="flex flex-row items-center">
            <div className="pr-3 text-right">
              <h2>Prev Post</h2>
              <a href="#">
                <p className="font-semibold hover:bg-emerald-600">
                  Telescope 101
                </p>
              </a>
            </div>
            <img src={prev} alt="" />
          </div>
        </div>

        {/* ---------author---------- */}

        <div className="flex flex-row justify-between border-b py-10">
          <div className="flex flex-row items-center p-10 bg-gray-50">
            <img src={author} alt="" className="rounded-full" />
            <span className="pl-5">
              <h2 className="font-semibold">Harward Milan</h2>
              <p className="text-gray-500 font-semibold">
                Second divided from form fish beast made. Every of seas all
                gathered use saying you're, he our dominion twon Second divided
                from
              </p>
            </span>
          </div>
        </div>

        {/* ---------comments---------- */}

        <div className="border-b py-10">
          <p className="font-semibold">05 Comments</p>
          <div className="flex py-10 h-auto">
            <img src={comment1} alt="" className="rounded-full" />
            <div className="pl-5">
              <span className=" flex flex-row items-center ">
                <p className="text-gray-500 font-semibold">
                  Second divided from form fish beast made. Every of seas all
                  gathered use saying you're, he our dominion twon Second
                  divided from
                </p>
              </span>
              <div className="flex flex-row justify-between">
                <span className="flex flex-row gap-3">
                  <h2 className="font-semibold">Emilly Blunt</h2>
                  <ul className="flex flex-row gap-5">
                    <li>December 4, 2017 at 3:12 pm</li>
                  </ul>
                </span>
                <span className="hover:text-emerald-700">
                  <a href="#">REPLY</a>
                </span>
              </div>
            </div>
          </div>

          <div className="flex py-10">
            <img src={comment2} alt="" className="rounded-full" />

            <div className="pl-5">
              <span className=" flex flex-row items-center ">
                <p className="text-gray-500 font-semibold">
                  Second divided from form fish beast made. Every of seas all
                  gathered use saying you're, he our dominion twon Second
                  divided from
                </p>
              </span>
              <div className="flex flex-row justify-between">
                <span className="flex flex-row gap-3">
                  <h2 className="font-semibold">Emilly Blunt</h2>
                  <ul className="flex flex-row gap-5 text-gray-500">
                    <li>December 4, 2017 at 3:12 pm</li>
                  </ul>
                </span>
                <span className="hover:text-emerald-700">
                  <a href="#">REPLY</a>
                </span>
              </div>
            </div>
          </div>

          <div className="flex py-10">
            <img src={comment3} alt="" className="rounded-full" />

            <div className="pl-5">
              <span className=" flex flex-row items-center ">
                <p className="text-gray-500 font-semibold">
                  Second divided from form fish beast made. Every of seas all
                  gathered use saying you're, he our dominion twon Second
                  divided from
                </p>
              </span>
              <div className="flex flex-row justify-between">
                <span className="flex flex-row gap-3">
                  <h2 className="font-semibold">Emilly Blunt</h2>
                  <ul className="flex flex-row gap-5 text-gray-500">
                    <li>December 4, 2017 at 3:12 pm</li>
                  </ul>
                </span>
                <span className="hover:text-emerald-700">
                  <a href="#">REPLY</a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ---------REPLY---------- */}

        <div
          className="sm: p-10 sm:mr-10 
          text-gray-500 font-light mb-14 sm:block hidden"
        >
          <div className="flex flex-col py-2">
            <textarea
              type="textarea"
              className="border p-3 h-40 mb-2"
              placeholder="Write Comment"
            />
          </div>

          <div className="flex flex-row py-2 w-auto">
            <input
              type="text"
              className="border p-3 w-1/2 mr-2"
              placeholder="Name"
            />
            <input
              type="text"
              className="border p-3 w-1/2 ml-2"
              placeholder="Email"
            />
          </div>

          <div className="flex flex-col py-2">
            <input
              type="text"
              className="border  p-3"
              placeholder="Website"
            />
          </div>

          <button
            className=" h-auto border-2 border-emerald-600  sm:border p-3 
             hover:bg-white text-sm 
          hover:text-black  sm:mt-5 text-emerald-600 border-solid 
           font-mukta"
          >
            POST COMMENT
          </button>
        </div>
      </div>

      {/* ------ right side ---------- */}
      <div className="col-span-4 flex flex-col">
        {/* ---- input componenet ------- */}
        <div className="flex h-24 bg-gray-50 py-3 px-9 items-center">
          <input
            type="text"
            placeholder="Search keyword"
            className="p-3 border h-12"
          />
          <button className="bg-green-800 p-3 h-12">
            <img src={sendButton} alt="send button" className="h-full" />
          </button>
        </div>
        <div className="h-5" /> {/*div for height */}
        <div className="h-auto bg-gray-50 p-9">
          <h2 className="font-bold text-gray-600 border-b pb-3">Category</h2>
          <ul className="py-3">
            <li className="border-b py-5">
              <a href="#">Resturant food (37)</a>
            </li>
            <li className="border-b py-3">
              <a href="#">Travel news (10)</a>
            </li>
            <li className="border-b py-3">
              <a href="#">Modern technology (03)</a>
            </li>
            <li className="border-b py-3">
              <a href="#">Product (11)</a>
            </li>
            <li className="border-b py-3">
              <a href="#"> Inspiration (21)</a>
            </li>
            <li className="border-b py-3">
              <a href="#">Health Care (21)09</a>
            </li>
          </ul>
        </div>
        <div className="h-5" /> {/*div for height */}
        <div className="h-auto bg-gray-50 p-9">
          <h2 className="font-bold text-gray-600 border-b pb-3">Recent Post</h2>

          <div className=" flex pt-10 pb-5">
            <img src={post1} alt="" />
            <div className="flex flex-col  justify-center ml-3">
              <a href="#" className="text-gray-700 hover:text-emerald-800">
                <h2 className="">From life was you fish</h2>
              </a>
              <p className="text-sm text-gray-500">January 12, 2019</p>
            </div>
          </div>

          <div className=" flex pb-5">
            <img src={post2} alt="" />
            <div className="flex flex-col  justify-center ml-3 ">
              <h2 className="text-gray-700 hover:text-emerald-800">
                The Amazing Hubble
              </h2>
              <p className="text-sm  text-gray-500">02 Hours ago </p>
            </div>
          </div>

          <div className=" flex pb-5">
            <img src={post3} alt="" />
            <div className="flex flex-col justify-center  ml-3">
              <h2 className="text-gray-700 hover:text-emerald-800">
                Astronomy Or Astrology
              </h2>
              <p className="text-sm  text-gray-500">03 Hours ago</p>
            </div>
          </div>

          <div className=" flex pb-5">
            <img src={post4} alt="" />
            <div className="flex flex-col  justify-center ml-3">
              <h2 className="text-gray-700 hover:text-emerald-800">
                Asteroids telescope
              </h2>
              <p className="text-sm  text-gray-500">01 Hours ago</p>
            </div>
          </div>
        </div>
        <div className="h-5" /> {/*div for height */}
        <div className="h-auto bg-gray-50 p-9">
          <h2 className="font-bold text-gray-600 border-b pb-3">Tag Clouds</h2>
          <div className="pt-9">
            <ul className="text-sm flex flex-row flex-wrap gap-3">
              <li>
                <a
                  href="#"
                  className="px-3 py-1 bg-white border text-gray-500  hover:text-white hover:bg-emerald-700"
                >
                  project
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="px-3 py-1 bg-white border text-gray-500  hover:text-white hover:bg-emerald-700"
                >
                  love
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-1 bg-white border text-gray-500  hover:text-white hover:bg-emerald-700"
                >
                  technology
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-1 bg-white border text-gray-500  hover:text-white hover:bg-emerald-700"
                >
                  travel
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="px-3 py-1 bg-white border text-gray-500  hover:text-white hover:bg-emerald-700"
                >
                  resturant
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-1 bg-white border text-gray-500  hover:text-white hover:bg-emerald-700"
                >
                  lifestyle
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-3 py-1 bg-white border text-gray-500 hover:text-white hover:bg-emerald-700"
                >
                  design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="px-5 py-1 bg-white border text-gray-500  hover:text-white hover:bg-emerald-700"
                >
                  illustration
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* -------- aside instagram ---------- */}
        <div className="h-5" /> {/*div for height */}
        <div className="h-auto bg-gray-50 p-9">
          <h2 className="font-bold text-gray-600 border-b pb-3">
            Instagram Feed
          </h2>
          <div className="pt-9 grid grid-cols-3 gap-3">
            <img src={post5} alt="" />
            <img src={post6} alt="" />
            <img src={post7} alt="" />
            <img src={post8} alt="" />
            <img src={post9} alt="" />
            <img src={post10} alt="" />
          </div>
        </div>
        {/* -------- aside newsletter  ---------- */}
        <div className="h-5" /> {/*div for height */}
        <div className="h-auto bg-gray-50 p-9">
          <h2 className="font-bold text-gray-600 border-b pb-3">Newsletter</h2>
          <div className="pt-9 flex flex-col">
            <input
              type="text"
              placeholder="Enter email"
              className="border p-3"
            />
            <button
              className="text-center text-emerald-600 text-sm
            border p-3 mt-3 border-emerald-600 hover:bg-emerald-600 hover:text-white"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
        {/* ----- pagination ------ */}
      </div>
    </div>
  );
}
