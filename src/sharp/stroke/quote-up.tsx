import React from "react";
const QuoteUp: React.FC<
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
        strokeWidth={1.5}
        d="M10 20v-8H2v8zM2 12v-2a6 6 0 0 1 6-6M22 20v-8h-8v8zM14 12v-2a6 6 0 0 1 6-6"
      />
    </svg>
  );
};
export default QuoteUp;
