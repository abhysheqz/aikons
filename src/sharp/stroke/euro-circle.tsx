import React from "react";
const EuroCircle: React.FC<
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
        d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 14.492c-.478.904-1.349 1.508-2.343 1.508-1.51 0-2.734-1.393-2.734-3.111V11.11C9.923 9.393 11.147 8 12.657 8c.994 0 1.865.604 2.343 1.508M8 12h5"
      />
    </svg>
  );
};
export default EuroCircle;
