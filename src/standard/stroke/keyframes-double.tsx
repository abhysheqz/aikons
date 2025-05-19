import React from "react";
const KeyframesDouble: React.FC<
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
        d="m16 10.67-5.27-5.998a1.965 1.965 0 0 0-2.96 0L2.5 10.67a2.02 2.02 0 0 0 0 2.66l5.27 5.998a1.965 1.965 0 0 0 2.96 0L16 13.33a2.02 2.02 0 0 0 0-2.66"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 4.149a1.965 1.965 0 0 1 2.23.523l5.27 5.998a2.02 2.02 0 0 1 0 2.66l-5.27 5.998a1.965 1.965 0 0 1-2.23.524"
      />
    </svg>
  );
};
export default KeyframesDouble;
