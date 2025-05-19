import React from "react";
const AiLearning: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="M12.001 15v5.5" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.001 5h-6v6h6z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.501 11v2m3-2v2m-3-10v2m3-2v2m-4.5 1.5h-2m2 3h-2m10-3h-2m2 3h-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M5.515 4.092 2.13 3.04a.1.1 0 0 0-.13.096V18.02L12 21l9.999-2.98V3.137a.1.1 0 0 0-.13-.096l-3.384 1.052"
      />
    </svg>
  );
};
export default AiLearning;
