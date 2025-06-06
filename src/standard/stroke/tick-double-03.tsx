import React from "react";
const TickDouble_03: React.FC<
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
        d="m11.714 8.75 2.305-2.482A.68.68 0 0 1 15 6.25v0m-6.5 11.5c-.28.28-.73.29-1.021.022l-4.776-4.377a1 1 0 0 1-.092-1.378l1.24-1.488a1 1 0 0 1 1.419-.12l.085.074M7.11 12.017l1.24-1.488a1 1 0 0 1 1.42-.12l2.73 2.341 5.794-6.24a1 1 0 0 1 1.44-.026l1.559 1.559a1 1 0 0 1 0 1.414l-8.116 8.116a1 1 0 0 1-1.383.03l-4.59-4.208a1 1 0 0 1-.093-1.378"
      />
    </svg>
  );
};
export default TickDouble_03;
