import Image from "next/image";
import Assets from "@/data/assets";

const Gallery = () => {
  return (
    <div className="mt-4 grid grid-cols-4 gap-4 auto-rows-[200px]">
      {/* Large panoramic - spans 3 columns */}
      <div className="max-sm:col-span-4 col-span-3 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <Image
          fill
          src={Assets.gallery[0].image}
          alt={Assets.gallery[0].title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">
            {Assets.gallery[0].title}
          </div>
        </div>
      </div>

      {/* Tall portrait - spans 2 rows */}
      <div className="max-sm:hidden col-span-1 row-span-2 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <Image
          fill
          src={Assets.gallery[1].image}
          alt={Assets.gallery[1].title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">
            {Assets.gallery[1].title}
          </div>
        </div>
      </div>

      {/* Square image 1 */}
      <div className="max-sm:col-span-2 col-span-1 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <Image
          fill
          src={Assets.gallery[2].image}
          alt={Assets.gallery[2].title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">
            {Assets.gallery[2].title}
          </div>
        </div>
      </div>

      {/* Square image 2 */}
      <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <Image
          fill
          src={Assets.gallery[3].image}
          alt={Assets.gallery[3].title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">
            {Assets.gallery[3].title}
          </div>
        </div>
      </div>

      {/* Wide rectangle - spans 2 columns */}
      <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <Image
          fill
          src={Assets.gallery[4].image}
          alt={Assets.gallery[4].title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">
            {Assets.gallery[4].title}
          </div>
        </div>
      </div>

      {/* Square image 3 */}
      <div className="col-span-2 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <Image
          fill
          src={Assets.gallery[5].image}
          alt={Assets.gallery[5].title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">
            {Assets.gallery[5].title}
          </div>
        </div>
      </div>

      {/* Square image 4 */}
      {/* <div className="col-span-1 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
         <Image
          fill
          src="/gallery/image3.jpg"
          alt="memory city"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">City Lights</div>
        </div>
      </div> */}

      {/* Square image 5 */}
      <div className="max-sm:hidden col-span-1 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <Image
          fill
          src={Assets.gallery[6].image}
          alt={Assets.gallery[6].title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">
            {Assets.gallery[6].title}
          </div>
        </div>
      </div>

      {/* Large square - spans 2x2 */}
      <div className="col-span-2 row-span-2 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <Image
          fill
          src={Assets.gallery[7].image}
          alt={Assets.gallery[7].title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">
            {Assets.gallery[7].title}
          </div>
        </div>
      </div>

      {/* Square image 6 */}
      <div className="max-sm:col-span-2 col-span-1 row-span-2 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <Image
          fill
          src={Assets.gallery[8].image}
          alt={Assets.gallery[8].title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">
            {Assets.gallery[8].title}
          </div>
        </div>
      </div>

      {/* Square image 7 */}
      <div className="max-sm:hidden col-span-1 row-span-1 group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer bg-gradient-to-br from-slate-700 to-slate-800">
        <Image
          fill
          src={Assets.gallery[9].image}
          alt={Assets.gallery[9].title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-sm font-medium">
            {Assets.gallery[9].title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
