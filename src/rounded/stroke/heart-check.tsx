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
        d="M13 20.303a2.64 2.64 0 0 1-2.59-.335C7.59 17.858 2 13.035 2 8.694 2 5.826 4.105 3.5 7 3.5c1.5 0 3 .5 5 2.5 2-2 3.5-2.5 5-2.5 2.895 0 5 2.326 5 5.194q-.002.648-.157 1.306"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 17s1 0 2 2c0 0 3.177-5 6-6"
      />
    </svg>
  );
};
export default HeartCheck;
