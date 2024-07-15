export default function AppBar() {
  return (
    <div
      className="bg-gray-700 sm:h-16  flex flex-col sm:flex-row 
    sm:justify-center sm:items-center"
    >
      <div className="">
        <ul className="">
          <li
            className="list-none text-gray-200 justify-center 
          items-center text-lg  sm:flex p-3 sm:p-0 flex-row"
          >
            <span className="text-emerald-400 mx-1">ENDS TOMORROW:</span>
            Join Teachable for $4,800 in bonus content
          </li>
        </ul>
      </div>

      {/* ----------------- time section -------------- */}

      <div
        className="flex flex-row justify-center gap-5 sm:pl-24 py-5 
        sm:pr-10 sm:gap-5 text-emerald-400"
      >
        <div className="flex flex-col items-center font-bold text-xl">
          <span>30</span>
          <p className="text-gray-400 font-light text-sm">Days</p>
        </div>
        <div className="flex flex-col items-center font-bold text-xl">
          <span>09</span>
          <p className="text-gray-400 font-light text-sm">Hrs</p>
        </div>
        <div className="flex flex-col items-center font-bold text-xl">
          <span>29</span>
          <p className="text-gray-400 font-light text-sm">Mins</p>
        </div>
        <div className="flex flex-col items-center font-bold text-xl">
          <span>42</span>
          <p className="text-gray-400 font-light text-sm">Secs</p>
        </div>
      </div>

      <div className="hidden sm:block">
        <a href="#" className="text-white border-b-2 pb-2 font-medium">
          Learn More
        </a>
      </div>
    </div>
  );
}
