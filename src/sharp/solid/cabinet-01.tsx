import React from "react";
const Cabinet_01: React.FC<
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
        d="m4.05 21.118.79-2.368H2a.75.75 0 0 1-.75-.75v-3.25h21.5V18a.75.75 0 0 1-.75.75h-2.841l.79 2.368-1.898.632-1-3H6.948l-1 3zm18.7-7.869h-10v-11H22a.75.75 0 0 1 .75.75zm-11.5 0v-11H2a.75.75 0 0 0-.75.75v10.25zm-1.5-4.5v-2h-1.5v2zm6 0v-2h-1.5v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Cabinet_01;
