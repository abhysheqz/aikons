import React from "react";
const UserMultiple: React.FC<
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
        d="M7.403 14.44A6.75 6.75 0 0 0 2.25 21v.75h13.5V21a6.75 6.75 0 0 0-5.153-6.56A4.251 4.251 0 0 0 9 6.25a4.25 4.25 0 0 0-1.597 8.19"
      />
      <path
        fill="currentColor"
        d="M14.75 10.5a5.75 5.75 0 0 0-3.765-5.398A4.252 4.252 0 0 1 19.25 6.5a4.25 4.25 0 0 1-2.653 3.94A6.75 6.75 0 0 1 21.75 17v.75h-5.165a8.3 8.3 0 0 0-3.088-3.667A5.72 5.72 0 0 0 14.75 10.5"
      />
    </svg>
  );
};
export default UserMultiple;
