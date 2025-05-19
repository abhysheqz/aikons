import React from "react";
const Sun_03: React.FC<
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
        d="M6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 4.5V2h2v2.5zM11 22v-2.5h2V22zM16.597 5.99l1.768-1.768 1.414 1.414-1.767 1.768zM4.223 18.363l1.768-1.768 1.414 1.414-1.768 1.768zM19.502 11h2.5v2h-2.5zm-17.5 0h2.5v2h-2.5zM18.011 16.597l1.768 1.767-1.414 1.415-1.768-1.768zM5.637 4.221 7.405 5.99 5.99 7.404 4.223 5.636z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sun_03;
