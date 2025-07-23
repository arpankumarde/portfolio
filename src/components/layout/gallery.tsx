const Gallery = () => {
  return (
    <div className="mt-4 grid grid-cols-4 gap-4 auto-rows-[200px]">
      {/* Large panoramic - spans 3 columns */}
      <div className="col-span-3 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <img
          src="/gallery/image6.jpg"
          alt="memory panorama"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">Hexafalls, 2025</div>
        </div>
      </div>

      {/* Tall portrait - spans 2 rows */}
      <div className="col-span-1 row-span-2 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <img
          src="/gallery/image2.jpg"
          alt="memory portrait"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">Hexafalls, 2025</div>
        </div>
      </div>

      {/* Square image 1 */}
      <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <img
          src="/gallery/image4.jpg"
          alt="memory nature"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">Hack4Bengal 4.0</div>
        </div>
      </div>

      {/* Square image 2 */}
      <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <img
          src="/gallery/image1.jpg"
          alt="memory adventure"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">
            IDE Bootcamp, Ranchi
          </div>
        </div>
      </div>

      {/* Wide rectangle - spans 2 columns */}
      <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <img
          src="/gallery/image5.jpg"
          alt="memory sunset"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">
            Hack4Bengal Evaluation
          </div>
        </div>
      </div>

      {/* Square image 3 */}
      <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <img
          src="/gallery/image12.jpg"
          alt="memory ocean"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">Techstorm, 2025</div>
        </div>
      </div>

      {/* Square image 4 */}
      {/* <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <img
          src="/gallery/image3.jpg"
          alt="memory city"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">City Lights</div>
        </div>
      </div> */}

      {/* Square image 5 */}
      <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <img
          src="/gallery/image11.jpg"
          alt="memory mountain"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">
            SAP Hackfest, 2025
          </div>
        </div>
      </div>

      {/* Large square - spans 2x2 */}
      <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <img
          src="/gallery/image3.jpg"
          alt="memory featured"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">
            IDE Bootcamp, Ranchi
          </div>
        </div>
      </div>

      {/* Square image 6 */}
      <div className="col-span-1 row-span-2 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <img
          src="/gallery/image9.jpg"
          alt="memory forest"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">Binary, Kalyani</div>
        </div>
      </div>

      {/* Square image 7 */}
      <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <img
          src="/gallery/image10.jpg"
          alt="memory desert"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">Hack4Bengal 4.0</div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
