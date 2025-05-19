import React from "react";
const HandPointingDown_01: React.FC<
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
        d="M9 1.25h9a.75.75 0 0 1 .75.75v1.845L19.681 6c.371.777.818 1.937.993 3.107.17 1.14.115 2.518-.82 3.46-2.035 2.047-4.74 2.622-6.604 2.685v4.998a2.5 2.5 0 0 1-5 0v-8.374l-.923.97-.047.045a2.4 2.4 0 0 1-3.503-.337c-.707-.91-.702-2.2.01-3.106h.001L8.25 3.743V2A.75.75 0 0 1 9 1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HandPointingDown_01;
