import React from "react";
const Kissing: React.FC<
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
        d="M22 12c-.01-5.414-4.523-10-10-10C6.477 2 2 6.477 2 12s4.477 10 10 10c1.045 0 2.053-.16 3-.458"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 9.5a1.5 1.5 0 0 0-3 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8.009 9H8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 14c.5 0 2 0 3 1l-1 1 1 1c-1 1-2.5 1-3 1M21.455 15.213C20.457 14.211 19.5 15 19.5 15s-.715-1.273-2.044-.944c-1.61.399-2.459 3.444.544 5.944 4-.5 4.665-3.573 3.455-4.787"
      />
    </svg>
  );
};
export default Kissing;
