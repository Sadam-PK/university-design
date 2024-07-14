export default function AppBar() {
  return (
    <div className="bg-gray-700 h-16 flex justify-center items-center">
      <div className="flex justify-center">
        <ul>
          <li className="list-none text-gray-200 justify-center 
          items-center text-lg">
            <span className="text-emerald-400 mx-3">ENDS TOMORROW:</span>Join
            Teachable for $4,800 in bonus content
          </li>
        </ul>
      </div>

      {/* ----------------- time section -------------- */}

      <div className="grid grid-cols-4 pl-24 pr-10 gap-5 text-emerald-400">
        <div className="flex flex-col items-center font-bold text-xl">
          <span>30</span>{" "}
          <p className="text-gray-400 font-light text-sm">Days</p>
        </div>
        <div className="flex flex-col items-center font-bold text-xl">
          <span>09</span>{" "}
          <p className="text-gray-400 font-light text-sm">Hrs</p>
        </div>
        <div className="flex flex-col items-center font-bold text-xl">
          <span>29</span>{" "}
          <p className="text-gray-400 font-light text-sm">Mins</p>
        </div>
        <div className="flex flex-col items-center font-bold text-xl">
          <span>42</span>{" "}
          <p className="text-gray-400 font-light text-sm">Secs</p>
        </div>
      </div>

      <div className="">
        <a href="#" className="text-white border-b-2 pb-2 font-medium">
          Learn More
        </a>
      </div>
    </div>
  );
}
