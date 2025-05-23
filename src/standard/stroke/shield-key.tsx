import React from "react";
const ShieldKey: React.FC<
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
        strokeWidth={1.5}
        d="M21 11.051V6.123c0-.775-.585-1.418-1.345-1.55-3.06-.532-5.6-1.715-6.84-2.371a1.75 1.75 0 0 0-1.63 0c-1.24.656-3.78 1.84-6.84 2.371C3.585 4.705 3 5.348 3 6.123v4.928c0 6.429 6.538 9.935 8.469 10.83.34.159.721.159 1.062 0C14.462 20.987 21 17.48 21 11.051Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.558 14.561c-.59.59-1.533.582-2.115 0a1.5 1.5 0 0 1-.006-2.121 1.506 1.506 0 0 1 2.127 0 1.5 1.5 0 0 1-.006 2.121Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m11 12 2-2m4 0-2-2-2 2m0 0 1.5 1.5"
      />
    </svg>
  );
};
export default ShieldKey;
