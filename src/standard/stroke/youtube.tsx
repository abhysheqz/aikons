import React from "react";
const Youtube: React.FC<
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
        d="m15 12-5-3v6z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.852 4.44C16.762 4.159 14.442 4 12 4s-4.762.158-6.852.44C3.295 4.693 2 6.329 2 8.2V15.8c0 1.87 1.295 3.507 3.148 3.758 2.09.283 4.41.441 6.852.441s4.762-.158 6.852-.44C20.705 19.307 22 17.671 22 15.8V8.2c0-1.87-1.295-3.507-3.148-3.758Z"
      />
    </svg>
  );
};
export default Youtube;
