import React from "react";
const StudyLamp: React.FC<
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
        d="M17.562 9.222 15.998 12l-2-5.5-2.972-1.462L12.498 2l3 1.5 5.5-.5-1.434 2.693m-2.002 3.53.434.254a1.984 1.984 0 0 0 2.735-.745 2.057 2.057 0 0 0-.733-2.784l-.434-.255m-2.002 3.53 2.002-3.53"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6 12 8-5.5M6 22h9M6 15l5 7"
      />
    </svg>
  );
};
export default StudyLamp;
