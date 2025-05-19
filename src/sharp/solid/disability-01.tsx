import React from "react";
const Disability_01: React.FC<
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
        d="M12 7.5h2V9h3.5v2H14v3h2.5a1 1 0 0 1 .858.486l1.208 2.014H20v2h-2a1 1 0 0 1-.858-.485L15.934 16H13a1 1 0 0 1-1-1z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.5 4a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 15.458c0-3.494 2.552-6.386 5.893-6.944l.33 1.972C7.823 10.887 6 12.965 6 15.458c0 2.78 2.265 5.042 5.07 5.042a5.07 5.07 0 0 0 4.12-2.103l1.62 1.171a7.07 7.07 0 0 1-5.74 2.932C7.17 22.5 4 19.352 4 15.458"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Disability_01;
