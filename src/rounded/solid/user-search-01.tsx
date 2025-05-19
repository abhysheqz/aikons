import React from "react";
const UserSearch_01: React.FC<
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
        d="M12.75 17.25a4 4 0 1 1 7.446 2.032l1.261 1.26a1 1 0 0 1-1.414 1.415l-1.261-1.26a4 4 0 0 1-6.032-3.446m4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.932 12.82a5.25 5.25 0 0 0-2.432 4.43c0 1.115.348 2.15.941 3H3a.75.75 0 0 1-.75-.75 7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 10 1.75a5.25 5.25 0 0 1 1.755 10.2c.777.18 1.509.476 2.177.87"
      />
    </svg>
  );
};
export default UserSearch_01;
