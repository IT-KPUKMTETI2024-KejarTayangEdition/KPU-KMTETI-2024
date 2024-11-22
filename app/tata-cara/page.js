import "./content.css";

const Page = () => {
  return (
    <div className="md:panduan-wrapper">
      <object
        data="/tatacara.pdf"
        type="application/pdf"
        className="md:w-full h-[85vh] max-w-[100%]"
      >
        <p className="download-pdf text-center min-h-screen min-w-screen">
          Unable to display PDF file. <a href="/tatacara.pdf" className="text-blue-500 underline">Download</a>{" "}
          instead.
        </p>
      </object>
    </div>
  );
};
export default Page;