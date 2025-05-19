import React from "react";
const Surfboard: React.FC<
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
        d="M10.053 6.496C13.333 3.213 18.512 2 22 2c0 3.488-1.226 8.658-4.507 11.941-2.963 2.965-8.185 6.128-11.234 7.91a.2.2 0 0 1-.298-.145L5.5 18.5l-3.206-.458a.2.2 0 0 1-.145-.298c1.78-3.051 4.941-8.283 7.904-11.248Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21 8c-4 6.5-9 0-15.5 4.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m7.5 16.5 1-1"
      />
    </svg>
  );
};
export default Surfboard;
