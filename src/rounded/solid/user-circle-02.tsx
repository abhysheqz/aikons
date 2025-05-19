import React from "react";
const UserCircle_02: React.FC<
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
        d="M12 3.205a8.795 8.795 0 1 0 0 17.59 8.795 8.795 0 0 0 0-17.59M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.5 9.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M5.409 17.647A5.75 5.75 0 0 1 10.4 14.75h3.197a5.75 5.75 0 0 1 4.992 2.897l1.02 1.946A10.72 10.72 0 0 1 12 22.75a10.72 10.72 0 0 1-7.61-3.157z"
      />
    </svg>
  );
};
export default UserCircle_02;
