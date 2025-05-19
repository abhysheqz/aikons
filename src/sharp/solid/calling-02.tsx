import React from "react";
const Calling_02: React.FC<
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
        d="M19.5 11.5a7 7 0 0 0-7-7v-2a9 9 0 0 1 9 9zM16 11a3 3 0 0 0-3-3V6a5 5 0 0 1 5 5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 2.5H2.5q0 19 19 19V16L17 14l-3 3c-3.694-1.583-5.416-3.306-7-7l3-3z"
      />
    </svg>
  );
};
export default Calling_02;
