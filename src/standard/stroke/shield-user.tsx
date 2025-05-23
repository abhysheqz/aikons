import React from "react";
const ShieldUser: React.FC<
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
        d="M13.752 8.25a1.75 1.75 0 1 1-3.501 0 1.75 1.75 0 0 1 3.5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.625 16h-5.25a.875.875 0 0 1-.875-.875 2.625 2.625 0 0 1 2.625-2.625h1.75a2.625 2.625 0 0 1 2.625 2.625.875.875 0 0 1-.875.875"
      />
    </svg>
  );
};
export default ShieldUser;
