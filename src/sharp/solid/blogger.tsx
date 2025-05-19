import React from "react";
const Blogger: React.FC<
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
        d="M9.25 8.75h2.5v1.5h-2.5zM9.25 13.75h5.5v1.5h-5.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM14.75 6.5a.75.75 0 0 0-.75-.75H6.25v12.5H17a.75.75 0 0 0 .75-.75V11a.75.75 0 0 0-.75-.75h-2.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Blogger;
