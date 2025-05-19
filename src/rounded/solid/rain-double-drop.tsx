import React from "react";
const RainDoubleDrop: React.FC<
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
        d="M6.132 4.246c1.336-1.328 3.4-1.328 4.736 0 .984.977 2.193 2.327 3.16 3.878.96 1.543 1.722 3.348 1.722 5.218 0 3.615-2.72 7.408-7.25 7.408s-7.25-3.793-7.25-7.408c0-1.87.761-3.675 1.723-5.218.966-1.55 2.175-2.9 3.159-3.878"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.693 5.668c-.623-.631-1.538-.631-2.16 0a.94.94 0 0 1-1.346-.004.987.987 0 0 1 .004-1.375c1.364-1.385 3.479-1.385 4.843 0 .944.958 2.108 2.285 3.04 3.814.927 1.52 1.676 3.32 1.676 5.202 0 3.622-2.67 7.445-7.137 7.445a.96.96 0 0 1-.952-.972c0-.537.426-.972.952-.972 3.22 0 5.234-2.74 5.234-5.5 0-1.372-.555-2.808-1.388-4.174-.827-1.357-1.881-2.565-2.766-3.464"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RainDoubleDrop;
