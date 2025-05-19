import React from "react";
const UserAdd_01: React.FC<
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
        d="M18.25 12.75v3.5h3.5v2h-3.5v3.5h-2v-3.5h-3.5v-2h3.5v-3.5z"
      />
      <path
        fill="currentColor"
        d="M15 20.75H2.25V20a7.75 7.75 0 0 1 5.995-7.55A5.252 5.252 0 0 1 10 2.25a5.25 5.25 0 0 1 1.755 10.2A7.7 7.7 0 0 1 15 14.078V15h-3.5v4.5H15z"
      />
    </svg>
  );
};
export default UserAdd_01;
