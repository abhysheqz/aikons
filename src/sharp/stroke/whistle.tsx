import React from "react";
const Whistle: React.FC<
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
      <circle
        cx={8}
        cy={15}
        r={2}
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 21a6 6 0 0 0 6-6h5l3-3V9h-6.5l-1 1.5h-2l-1-1.5H8a6 6 0 0 0 0 12ZM13.5 5V3M11 6 9.5 4.5M16 6l1.5-1.5"
      />
    </svg>
  );
};
export default Whistle;
