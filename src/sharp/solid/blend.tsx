import React from "react";
const Blend: React.FC<
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
        d="M1.25 2A.75.75 0 0 1 2 1.25h11a.75.75 0 0 1 .75.75v4.386a6.7 6.7 0 0 1 5.895 5.507 5.75 5.75 0 1 1-7.753 7.75 6.7 6.7 0 0 1-5.504-5.893H2a.75.75 0 0 1-.75-.75zm10.022 15.501a5.75 5.75 0 0 1 6.232-6.23 4.794 4.794 0 1 0-6.232 6.23"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blend;
