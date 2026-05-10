import { DogIcon } from "lucide-react";

function AnimalImage({ src, alt }) {
  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-gray-100">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          <DogIcon size={32} />
        </div>
      )}
    </div>
  );
}

export default AnimalImage;