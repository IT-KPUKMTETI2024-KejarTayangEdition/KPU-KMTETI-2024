const Page = () => {
  return (
    <div className="md:panduan-wrapper flex justify-center items-center">
      <iframe
        src="/tatacara.pdf"
        className="md:w-full md:h-[90vh] lg:max-w-[100%] min-h-screen h-[50vh] w-[50vh]"
        title="PDF Viewer"
      >
        <p className="download-pdf text-center min-h-screen min-w-screen">
          Unable to display PDF file. <a href="/tatacara.pdf" className="text-blue-500 underline">Download</a>{" "}
          instead.
        </p>
      </iframe>
    </div>
  );
};
export default Page;