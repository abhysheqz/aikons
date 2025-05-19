import React from "react";
const WaterfallDown_01: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M2.5 20.5v-18h2v17h17v2h-18a1 1 0 0 1-1-1M21.5 13.5v3h-2v-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.5 7.5v6h-2v-6zM13.5 10.5v3h-2v-3zM9.5 4.5v6h-2v-6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WaterfallDown_01;
