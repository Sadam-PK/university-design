export default function Section1() {
  return (
    <div className="background1  relative grid grid-cols-2">
      <div className="absolute inset-0 bg-gray-600 opacity-30" />
      <div className="w-10/12  py-52  ml-32 text-white relative">
        <span className="font-bold text-2xl mb-5">EDUCATION & SCHOOL</span>
        <h1 className="font-bold text-5xl py-5 leading-tight">
          SHOWCASE COURSES, EVENTS AND MORE!
        </h1>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <a
          href="#"
          className="bg-gradient-to-tr from-emerald-700 to-emerald-900 p-5
           hover:bg-blue-500 border-white hover:border hover:bg-gradient-to-bl
            hover:to-gray-800 hover:from-white text-white"
        >
          Get Started Now
        </a>
      </div>
      <div></div>
    </div>
  );
}
