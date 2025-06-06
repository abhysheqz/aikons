import React from "react";
const Whatsapp: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8.618 12.404 1.879-1.904L10 7H7c0 3 1.58 6.44 4.623 8.42m0 0A9.94 9.94 0 0 0 17 17v-3l-3.502-.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.002 22.002c5.524 0 10.002-4.478 10.002-10.002S17.526 1.998 12.002 1.998 2 6.476 2 12c0 1.889.434 3.498 1.344 5.005L2.002 22l4.97-1.334c1.513.92 3.13 1.336 5.03 1.336"
      />
    </svg>
  );
};
export default Whatsapp;
