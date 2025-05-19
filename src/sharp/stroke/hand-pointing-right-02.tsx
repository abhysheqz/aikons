import React from "react";
const HandPointingRight_02: React.FC<
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
        d="M8.97 7.416h4.53m0 0h6.25a1.75 1.75 0 1 1 0 3.5H14.5V16.5a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V8l3.857-2.513c1.328-.871 1.942-.97 2.613-.986a3 3 0 0 1 .895.115c.646.184 1.19.66 2.28 1.614z"
      />
    </svg>
  );
};
export default HandPointingRight_02;
