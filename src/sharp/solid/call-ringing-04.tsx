import React from "react";
const CallRinging_04: React.FC<
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
        d="M14.5 2.5v4h-2v-4zm5.414 3L17.29 8.125l-1.415-1.414L18.5 4.086zm-2.414 4h4v2h-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 2.5H2.5q0 19 19 19V16L17 14l-3 3c-3.694-1.583-5.417-3.306-7-7l3-3z"
      />
    </svg>
  );
};
export default CallRinging_04;
