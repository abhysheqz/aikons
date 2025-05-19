import React from "react";
const Contracts: React.FC<
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
        d="M18 6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m21.707 8.879-.586-.586a1 1 0 0 0-1.414 0l-6.779 6.779a2 2 0 0 0-.547 1.022L12 18l1.906-.381a2 2 0 0 0 1.022-.547l6.779-6.78a1 1 0 0 0 0-1.413Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18 10 2 2M5 19h1l1.25-2.5L8.5 19h1M6 6h8M6 10h6"
      />
    </svg>
  );
};
export default Contracts;
