import React from "react";
const UserArrowLeftRight: React.FC<
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
        d="M10.245 12.95A7.75 7.75 0 0 0 4.25 20.5v.75h15.5v-.75a7.75 7.75 0 0 0-5.995-7.55A5.252 5.252 0 0 0 12 2.75a5.25 5.25 0 0 0-1.755 10.2"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.336 5.086 22.75 8.5l-3.5 3.5-1.414-1.414L19.922 8.5l-2-2zM4.664 5.086 1.25 8.5l3.5 3.5 1.414-1.414L4.078 8.5l2-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserArrowLeftRight;
