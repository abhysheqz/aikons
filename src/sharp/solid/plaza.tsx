import React from "react";
const Plaza: React.FC<
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
        d="M21 21.75H3v-2h18z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.75 11.717 12.202 8.82l.925-1.773 6.623 3.457V21.11h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.75 3a.75.75 0 0 0-1.05-.687L4.25 6.009V21h9.5zM7.5 9.75h3v-1.5h-3zm0 4h3v-1.5h-3zm0 4h3v-1.5h-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Plaza;
