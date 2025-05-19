import React from "react";
const Cursor_01: React.FC<
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
        d="M5.144 2.439C5.2 1.384 6.45.874 7.234 1.567l12.092 10.7c.81.716.394 2.042-.669 2.184l-4.774.634 2.103 5.183a1.255 1.255 0 0 1-.696 1.636l-1.878.755a1.26 1.26 0 0 1-1.635-.693l-2.068-5.094-3.363 3.004c-.829.74-2.156.12-2.095-1.004z"
      />
    </svg>
  );
};
export default Cursor_01;
