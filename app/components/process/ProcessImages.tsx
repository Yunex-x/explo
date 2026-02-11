import Image from "next/image";

interface Props {
  showMainOnly?: boolean;
}

export default function ProcessImages({ showMainOnly = false }: Props) {
  return (
    <div className="relative w-full h-full pointer-events-none">
      {/* Main process image */}
      <Image
        src="/process/main.svg"
        alt=""
        width={488}
        height={488}
        className="
           w-[488px]
          sm:w-[260px]
          md:w-[300px]
          lg:w-[360px]
          xl:w-[488px]

         mt-[20px]
       lg:mt-[165px]

          
        "
        priority
      />

      
    </div>
  );
}
