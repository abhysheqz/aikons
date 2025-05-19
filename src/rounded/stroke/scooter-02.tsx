import React from "react";
const Scooter_02: React.FC<
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
        d="M2 16c0-3.182 2.239-5 5-5s5 1.818 5 5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 8h4"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M10 16a3 3 0 1 1-6 0" />
      <circle cx={20} cy={17} r={2} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M16 8c1.333.638 4 3.174 4 7M15.99 5h.547c.984 0 1.888.58 2.344 1.503.315.64 0 1.497-.896 1.497H15.99m0-3v3m0-3h-3.046m3.046 3c0 1.913-.212 8-3.99 8h5.666"
      />
    </svg>
  );
};
export default Scooter_02;
