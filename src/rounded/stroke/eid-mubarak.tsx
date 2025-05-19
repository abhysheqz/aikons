import React from "react";
const EidMubarak: React.FC<
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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 11.805c0 5.354 4.34 9.695 9.695 9.695 4.406 0 8.125-2.939 9.305-6.963A8.618 8.618 0 0 1 9.963 2.5C5.94 3.68 3 7.399 3 11.805Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.75 8.5c-2.424-3 1.711-4.5 2.75-6 1.039 1.5 5.174 3 2.75 6m-5.5 0h5.5m-5.5 0v7m5.5-7v7"
      />
    </svg>
  );
};
export default EidMubarak;
