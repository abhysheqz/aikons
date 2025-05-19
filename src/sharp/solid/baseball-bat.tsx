import React from "react";
const BaseballBat: React.FC<
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
        d="M21.749 18.5a3.25 3.25 0 1 0-6.5 0 3.25 3.25 0 0 0 6.5 0M21.436 2.565a4.488 4.488 0 0 0-6.717.418l-.008.01-7.562 10.095 3.764 3.764 10.105-7.57a4.488 4.488 0 0 0 .418-6.717"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.015 17.27 6.24 14.3l3.46 3.46-2.971 2.227a3.09 3.09 0 0 1-.886 2.543l-.219.22-4.374-4.374.219-.22a3.09 3.09 0 0 1 2.546-.885m1.165 3.537-1.988-1.988a1.593 1.593 0 0 1 1.988 1.988"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BaseballBat;
