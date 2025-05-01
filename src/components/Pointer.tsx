import Image from "next/image";
import mousePointer from "@/assets/images/mouse-pointer.svg";

export default function Pointer(props: { name: string; color?: 'red' | 'blue' }) {
  const { name, color = "blue" } = props;

  const bgColor = {
    red: "bg-red-500",
    blue: "bg-blue-500"
  }[color];

  return (
    <div className="relative">
      <Image src={mousePointer} alt="mouse pointer Image" />
      <div className="absolute top-full left-full">
        <div className={`inline-flex rounded-full font-bold text-sm px-2 rounded-tl-none ${bgColor}`}>
          {name}
        </div>
      </div>
    </div>
  );
}
