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
        strokeWidth={1.5}
        d="M15.618 18 22 6h-6l-2 4h-.5V6H9.624C8.624 9 6.5 13.5 2 13.5V18c4.5 0 10-5 10-5h.5L10 18z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M2 6v4.5h4.5V6z" />
    </svg>
  );
};
export default Webflow;
