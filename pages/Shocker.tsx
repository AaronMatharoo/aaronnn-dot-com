export default function Shocker() {
  const handleMobileView = () => {
    const link = document.createElement("a");
    link.href = "Shocker_Write_Up.pdf";
    link.download = "Shocker_Write_Up.pdf";
    link.click();
  };
  return (
    <div className="h-screen lg:w-screen lg:flex bg-[#323639]">
      <div className="lg:hidden flex justify-center pt-8">
        <button
          onClick={handleMobileView}
          className="flex items-center space-x-1 bg-white lg:hover:scale-110 active:scale-95 duration-100 text-2xl hover:font-semibold border-y-2 border-x-4 hover:border-x-8 border-black text-black py-1 px-2"
        >
          View project
        </button>
      </div>
      <iframe
        src="Shocker_Write_Up.pdf"
        className="lg:h-full lg:w-full hidden lg:block "
      ></iframe>
    </div>
  );
}
