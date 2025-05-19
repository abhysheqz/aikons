import React from "react";
const Quran_01: React.FC<
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
        d="M6.242 2.763a.75.75 0 0 1 .585.133l5.654 4.16 5.199-4.143a.75.75 0 0 1 1.057.124l2.353 3a.75.75 0 0 1-.14 1.063l-8 6a.75.75 0 0 1-.9 0l-8-6a.75.75 0 0 1-.185-.999l1.882-3a.75.75 0 0 1 .495-.338"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.7 7.9a1 1 0 0 1 1.4-.2l9.4 7.05 9.4-7.05a1 1 0 0 1 1.2 1.6L14.167 16l3.333 2.5V16a1 1 0 1 1 2 0v4.5a1 1 0 0 1-1.6.8l-5.4-4.05-5.4 4.05a1 1 0 0 1-1.6-.8V16a1 1 0 1 1 2 0v2.5l3.333-2.5L1.9 9.3a1 1 0 0 1-.2-1.4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Quran_01;
