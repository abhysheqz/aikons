import React from "react";
const PerplexityAi: React.FC<
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
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M6 16H3V8h18v8h-3M12 2v20M12 8 5.5 2H5v6M12 8l6.5-6h.5v6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M6 13.5 12 8l6 5.5V21h-.5L12 15.5 6.5 21H6z"
      />
    </svg>
  );
};
export default PerplexityAi;
