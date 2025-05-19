import React from "react";
const FiveSquare: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.747 1.75h-20.5v20.5h20.5zM16.497 8V6h-6.82l-1.4 7h2.134c.242-.246.604-.537.77-.632.336-.192.79-.368 1.316-.368 1.135 0 2 .788 2 2s-.865 2-2 2c-.941 0-1.424-.36-1.685-.659-.142-.162-.289-.463-.344-.583H8.406c.051.441.212.785.283.937l.016.034c.117.255.307.592.602.93.614.701 1.632 1.341 3.19 1.341 2.179 0 4-1.623 4-4s-1.821-4-4-4a4.5 4.5 0 0 0-1.643.314L11.317 8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FiveSquare;
