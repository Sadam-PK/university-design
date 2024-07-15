import LogoPic from "../assets/logo.webp";

export default function Logo() {
  return (
    <div className="flex justify-between px-8 sm:px-0 relative">
      <a href="/">
        <img src={LogoPic} alt="Logo"/>
      </a>
    </div>
  );
}
