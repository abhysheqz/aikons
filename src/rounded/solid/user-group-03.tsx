import React from "react";
const UserGroup_03: React.FC<
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
        d="M9.605 3.61a5 5 0 0 0-1.784 7.136A3.75 3.75 0 1 1 9.605 3.61m-1.08 8.64A6.29 6.29 0 0 0 4 18.286c0 .52.107 1.015.3 1.464h-.586a2.464 2.464 0 0 1-2.464-2.464 5.036 5.036 0 0 1 5.036-5.036zm3.475-8a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m-1.714 9a5.036 5.036 0 0 0-5.036 5.036 2.464 2.464 0 0 0 2.464 2.464h8.572a2.464 2.464 0 0 0 2.464-2.464 5.036 5.036 0 0 0-5.036-5.036zM17 8a4.98 4.98 0 0 1-.82 2.746 3.75 3.75 0 1 0-1.785-7.136A5 5 0 0 1 17 8m3 10.286c0 .52-.107 1.015-.3 1.464h.586a2.464 2.464 0 0 0 2.464-2.464 5.036 5.036 0 0 0-5.036-5.036h-2.239A6.29 6.29 0 0 1 20 18.286"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserGroup_03;
