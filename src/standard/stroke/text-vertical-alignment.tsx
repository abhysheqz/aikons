import React from "react";
const TextVerticalAlignment: React.FC<
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
        d="M13 4.5h9M13 8.5h9M2 12.5h20M13 20.5h9M13 16.5h9M8 9 5.5 3h-1L2 9m1.5-2.5h3M8 22l-2.5-6h-1L2 22m1.5-2.5h3"
      />
    </svg>
  );
};
export default TextVerticalAlignment;
