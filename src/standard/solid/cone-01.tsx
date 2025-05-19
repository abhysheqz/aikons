import React from "react";
const Cone_01: React.FC<
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
        d="M5.23 21.742C7.014 22.535 9.408 23 12 23s4.986-.465 6.77-1.258c.89-.396 1.674-.893 2.247-1.496.579-.607.983-1.368.983-2.246s-.404-1.639-.983-2.246c-.573-.603-1.356-1.1-2.247-1.496C16.986 13.465 14.592 13 12 13s-4.986.465-6.77 1.258c-.89.396-1.674.893-2.247 1.496C2.404 16.36 2 17.122 2 18s.404 1.639.983 2.246c.573.603 1.356 1.1 2.247 1.496"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.498 18.365a1 1 0 0 0 1.367-.363L12 3.992l8.135 14.01a1 1 0 0 0 1.73-1.004L13.73 2.988c-.771-1.328-2.689-1.328-3.46 0l-8.135 14.01a1 1 0 0 0 .363 1.367"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cone_01;
