import React from "react";
const Perspective: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.235 5.302 6.234 6.769A2 2 0 0 0 4.498 8.75v6.498a2 2 0 0 0 1.736 1.982l11.001 1.467a2 2 0 0 0 2.264-1.982V7.284a2 2 0 0 0-2.264-1.982Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22V2M2 12h20"
      />
    </svg>
  );
};
export default Perspective;
