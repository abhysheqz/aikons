import React from "react";
const PlayListRemove: React.FC<
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
        d="m16.628 18.043-2.793 2.793 1.414 1.414 2.793-2.793 2.793 2.793 1.414-1.414-2.793-2.793 2.793-2.793-1.414-1.414-2.793 2.793-2.793-2.793-1.414 1.414z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.233 1.75H2.5a.75.75 0 0 0-.75.75v3.25h4.303zM7.762 5.75h5.291l2.18-4H9.942zM16.942 1.75l-2.18 4h6.488V2.5a.75.75 0 0 0-.75-.75zM1.75 7.25h19.5v4.052l-3.206 3.206-2.793-2.793-3.535 3.535 2.793 2.793-3.207 3.207H2.5a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default PlayListRemove;
