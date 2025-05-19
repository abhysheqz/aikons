import React from "react";
const ToyTrain: React.FC<
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
        d="M10.499 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19.499 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM2 4h13M7 8h3M15.5 12.5H17"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 4v14h2.5m6.5 0V4M10.5 18h5"
      />
      <path
        fill="currentColor"
        d="m18.5 10 .697-.278a.75.75 0 0 0-.697-.472zm3.5 8v.75a.75.75 0 0 0 .75-.75zm0-5.494h.75a.75.75 0 0 0-.75-.75zm-2.5 0-.697.278.189.472h.508zM13 10.75h5.5v-1.5H13zm9 6.5h-2.5v1.5H22zm.75.75v-5.494h-1.5V18zM22 11.756h-2.5v1.5H22zm-1.803.473-1-2.507-1.394.556 1 2.506z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 10V7m0 0h-2m2 0h2"
      />
    </svg>
  );
};
export default ToyTrain;
