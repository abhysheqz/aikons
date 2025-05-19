import React from "react";
const Yoga_02: React.FC<
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
        d="M7.886 10c.686 1.397 1.418 2.705 1.25 4.314-.271 2.573-3.39 3.541-5.386 4.726-1.307.777-.818 2.96.786 2.96 1.944 0 3.68-.155 5.435-.98L14 18.5l1.5 1"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 10c-.686 1.397-1.419 2.705-1.25 4.314.27 2.573 3.39 3.541 5.385 4.726 1.307.777.819 2.96-.785 2.96-1.945 0-3.68-.155-5.435-.98l-4.03-2.52-1.5 1M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 16c2.446 0 3.544-2.705 3.893-4.57.092-.488.24-.973.563-1.349A5.99 5.99 0 0 1 12 8c1.816 0 3.444.807 4.544 2.081.323.376.471.861.563 1.348C17.457 13.295 18.554 16 21 16"
      />
    </svg>
  );
};
export default Yoga_02;
