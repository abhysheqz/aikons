import React from "react";
const UserRemove_02: React.FC<
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
        d="M7.245 12.95A7.75 7.75 0 0 0 1.25 20.5v.75h15.5v-.75a7.75 7.75 0 0 0-5.995-7.55A5.252 5.252 0 0 0 9 2.75a5.25 5.25 0 0 0-1.755 10.2"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.605 7.75 19 10.145l2.395-2.395 1.355 1.355-2.395 2.395 2.395 2.395-1.355 1.355L19 12.855l-2.395 2.395-1.355-1.355 2.395-2.395-2.395-2.395z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserRemove_02;
