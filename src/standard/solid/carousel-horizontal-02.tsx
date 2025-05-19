import React from "react";
const CarouselHorizontal_02: React.FC<
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
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.25 6A2.75 2.75 0 0 1 8 3.25h8A2.75 2.75 0 0 1 18.75 6v12A2.75 2.75 0 0 1 16 20.75H8A2.75 2.75 0 0 1 5.25 18zm14.5 2A2.25 2.25 0 0 1 22 5.75a.75.75 0 0 1 0 1.5.75.75 0 0 0-.75.75v8c0 .414.336.75.75.75a.75.75 0 0 1 0 1.5A2.25 2.25 0 0 1 19.75 16zM2 5.75a.75.75 0 0 0 0 1.5.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75.75.75 0 0 0 0 1.5A2.25 2.25 0 0 0 4.25 16V8A2.25 2.25 0 0 0 2 5.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CarouselHorizontal_02;
