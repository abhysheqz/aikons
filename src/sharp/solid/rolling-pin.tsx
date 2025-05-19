import React from "react";
const RollingPin: React.FC<
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
        d="m2.733 18.208 3.06 3.06c-.218.326-.442.62-.634.811a2.29 2.29 0 1 1-3.238-3.238c.191-.192.485-.416.812-.634M15.47 2.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-13 13a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 0 1 0-1.06zm2.737.262 3.06 3.06c.327-.217.62-.441.811-.633a2.29 2.29 0 1 0-3.238-3.238 5.6 5.6 0 0 0-.633.81"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default RollingPin;
