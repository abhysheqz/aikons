import React from "react";
const Kettle_01: React.FC<
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
        d="M5.999 9H2v6l3 3"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.664 9.99 4.996 22h14.001L18.33 9.991a6.343 6.343 0 0 0-12.666 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.999 9h16c0 5-3.644 5-3.644 5M11 18.5c0-3.6 2-2.4 2-6M12 4V2"
      />
    </svg>
  );
};
export default Kettle_01;
