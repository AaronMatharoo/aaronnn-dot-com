export default function StatisticalAnalysis() {
    const handleMobileView = () => {
        const link = document.createElement("a");
        link.href = "Statistical_Analysis_Curry.pdf";
        link.download = "Statistical_Analysis_Curry.pdf";
        link.click();
      };
  return (
    <div className="h-screen lg:w-screen lg:flex bg-[#323639]">
      <div className="lg:w-[35%] p-5 space-y-5 text-white">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold">
            Statistical Computing with R
          </h1>
          <h1 className="text-lg font-light">
            A Quantitative Analysis by Aaron Matharoo
          </h1>
        </div>
        <h1 className="lg:text-xl text-lg">
          This project is a statistical quantitative analysis through the use of
          the programming language R in R Studio of National Basketball
          Association Champion Stephen Curry and his performance over the
          2020-2021 regular season to the date of February 26th, 2021.
        </h1>
        <h1 className="lg:text-xl text-lg font-light hidden lg:block">
          This statistical analysis covers Curry's performance over 30 games
          using an online game log cited in the details of this analysis.
        </h1>
        <h1 className="lg:text-xl text-lg font-semibold">
          The document's appendix comprises the code from R
        </h1>
      </div>
      <div className="lg:hidden flex justify-center pt-8">
        <button onClick={handleMobileView} className="flex items-center space-x-1 bg-white lg:hover:scale-110 active:scale-95 duration-100 text-2xl hover:font-semibold border-y-2 border-x-4 hover:border-x-8 border-black text-black py-1 px-2">
            View project
        </button>
      </div>
      <iframe
        src="Statistical_Analysis_Curry.pdf"
        className="lg:h-full lg:w-[65%] hidden lg:block "
      ></iframe>
    </div>
  );
}
