import React from "react";
const CallOutgoing_03: React.FC<
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
        d="M16.086 3.914 17.672 5.5H12v2h5.672l-1.586 1.586L17.5 10.5l4-4-4-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8 2.5H2.5q0 19 19 19V16L17 14l-3 3c-3.695-1.583-5.417-3.305-7-7l3-3z"
      />
    </svg>
  );
};
export default CallOutgoing_03;
