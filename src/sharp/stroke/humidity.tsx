import React from "react";
const Humidity: React.FC<
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
        d="M20.5 13.5a8.5 8.5 0 0 1-17 0C3.5 7 12 2 12 2s8.5 5 8.5 11.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 12.284c1.465-.454 4.392-.6 7.984 1.418 3.586 2.014 6.532 1.296 8.016.433"
      />
    </svg>
  );
};
export default Humidity;
