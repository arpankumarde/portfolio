import Image from "next/image";

const ToolTag = ({ image, name }: { image: string; name: string }) => {
  return (
    <span className="inline-flex gap-1.5 rounded-md bg-zinc-600/45 hover:bg-zinc-600/70 border border-zinc-600 text-white px-1 py-0.5 text-sm text-center items-center">
      <Image
        alt={name}
        src={image}
        height={14}
        width={14}
        className="object-contain"
      />
      {name}
    </span>
  );
};

export default ToolTag;
