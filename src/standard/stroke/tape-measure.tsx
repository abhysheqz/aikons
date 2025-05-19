import React from "react";
const TapeMeasure: React.FC<
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
        d="M16 8.5c0 1.933-3.134 3.5-7 3.5s-7-1.567-7-3.5S5.134 5 9 5s7 1.567 7 3.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5 10c0 1.105 1.79 2 4 2V8c-2.21 0-4 .895-4 2Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 9v6.667C2 17.507 5.134 19 9 19h13v-7H9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 19v-2.5M14 19v-2.5M10 19v-2.5m-4 2V16"
      />
    </svg>
  );
};
export default TapeMeasure;
