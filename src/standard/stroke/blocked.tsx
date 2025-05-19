import React from "react";
const Blocked: React.FC<
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
        d="M10.25 10.5V8.75a1.75 1.75 0 1 1 3.5 0v1.75m1.75 1V15a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M21 11.051V6.123c0-.775-.585-1.418-1.345-1.55-3.06-.532-5.6-1.715-6.84-2.371a1.75 1.75 0 0 0-1.63 0c-1.24.656-3.78 1.84-6.84 2.371C3.585 4.705 3 5.348 3 6.123v4.928c0 6.429 6.538 9.935 8.469 10.83.34.159.721.159 1.062 0C14.462 20.987 21 17.48 21 11.051Z"
      />
    </svg>
  );
};
export default Blocked;
