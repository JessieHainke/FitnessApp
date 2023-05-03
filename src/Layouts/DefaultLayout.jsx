import Navbar from "../Components/Navbar";



export default function DefaultLayout({ className, children }) {
  return (
    <div className={`bg-bgdark text-white px-6 py-14 h-screen ${className}`}>
      {children}
      <Navbar />
    </div>
  );
}
