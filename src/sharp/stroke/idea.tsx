import React from "react";
const Idea: React.FC<
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
        d="M5.143 14A7.8 7.8 0 0 1 4 9.919C4 5.545 7.582 2 12 2s8 3.545 8 7.919A7.8 7.8 0 0 1 18.857 14"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M17 16H7c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C8.602 19 9.068 19 10 19h4c.932 0 1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C17 17.398 17 16.932 17 16Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m15 19-1 3h-4l-1-3M12 16v-6"
      />
    </svg>
  );
};
export default Idea;
