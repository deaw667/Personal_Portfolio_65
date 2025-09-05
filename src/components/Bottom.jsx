export default function Bottom() {
  return (
    <div>
      {/* Top section */}
      <div>
        <div className="w-auto bg-black p-12">
          <h1 className="text-white text-center text-2xl md:text-3xl">
            Game Development Portfolio
          </h1>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex justify-between md:flex-row flex-col md:p-0">
        <div className="w-[90%] p-5 border-t border-r border-white">
          <p>098-336-0990</p>
        </div>
        <div className="w-[90%] p-5 border-t border-r border-white">
          <p>thaweechai0004@gmail.com</p>
        </div>
        <div className="w-[90%] p-5 border-t border-r border-white">
          <p></p>
        </div>
      </div>
    </div>
  );
}
