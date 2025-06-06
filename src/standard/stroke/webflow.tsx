import React from "react";
const Webflow: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.618 18 22 6h-6l-2 4-.5-4H9.624C8.624 9 6.5 13.5 2 13.5V18c4.5 0 11-5.5 11-5.5L10 18z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 6v4.5h4.5V6z"
      />
    </svg>
  );
};
export default Webflow;
