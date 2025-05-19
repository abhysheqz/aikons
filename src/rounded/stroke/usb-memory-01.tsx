import React from "react";
const UsbMemory_01: React.FC<
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
        d="m4.038 12.539 5.938-5.94c1.4-1.4 2.1-2.099 2.97-2.099s1.57.7 2.97 2.1L17.4 8.085c1.4 1.4 2.1 2.1 2.1 2.969 0 .87-.7 1.57-2.1 2.97l-5.939 5.938a5.25 5.25 0 0 1-7.423-7.423"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M8.5 17a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14.5 5.35 1.383-1.383C16.861 2.99 17.35 2.5 17.958 2.5s1.097.489 2.075 1.467S21.5 5.434 21.5 6.042s-.489 1.097-1.467 2.075L18.65 9.5"
      />
    </svg>
  );
};
export default UsbMemory_01;
