import React from "react";
const UserCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M8.75 8.5a3.25 3.25 0 1 1 4.667 2.926 5.75 5.75 0 0 1 4.333 5.458.75.75 0 0 1-.214.54A7.73 7.73 0 0 1 12 19.75a7.73 7.73 0 0 1-5.535-2.325.75.75 0 0 1-.214-.54 5.75 5.75 0 0 1 4.332-5.46A3.25 3.25 0 0 1 8.75 8.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserCircle;
