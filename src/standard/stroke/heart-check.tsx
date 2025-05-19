import React from "react";
const HeartCheck: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14 16.6 2 2.4 6-6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.938 9.5q.061-.403.062-.806C22 5.826 19.895 3.5 17 3.5c-1.5 0-3 .5-5 2.5-2-2-3.5-2.5-5-2.5-2.895 0-5 2.326-5 5.194C2 14.5 12 20.5 12 20.5s.183-.11.5-.314"
      />
    </svg>
  );
};
export default HeartCheck;
