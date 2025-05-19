import React from "react";
const ThumbsUp: React.FC<
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
        d="M2.002 10.498v10h5v-10z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.002 10.502v9.986q0 .01.01.01h11.99l2.996-9.987a.01.01 0 0 0-.01-.013h-7.486L16 5.504a.01.01 0 0 0-.002-.01l-1.99-1.989a.01.01 0 0 0-.013 0l-6.99 6.99z"
      />
    </svg>
  );
};
export default ThumbsUp;
