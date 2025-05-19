import React from "react";
const Yoga_01: React.FC<
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
        d="M8.592 16c-.31.682-1.022.986-1.653 1.316l-3.646 1.907C1.828 19.99 2.559 22 4.13 22c3.492 0 7.213-2.694 10.37-4l1.5 1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m8 19 2-1c3.157 1.306 6.378 4 9.87 4 1.57 0 2.302-2.01.837-2.777l-3.646-1.907c-.631-.33-1.344-.634-1.653-1.316M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM12 8a6 6 0 0 0-6 6 6 6 0 0 0 6-6Zm0 0a6 6 0 0 1 6 6 6 6 0 0 1-6-6Z"
      />
    </svg>
  );
};
export default Yoga_01;
