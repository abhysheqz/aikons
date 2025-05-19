import React from "react";
const UserTime_03: React.FC<
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
        d="M5.25 6a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0M13.9 12.572A6.25 6.25 0 0 0 10.75 18c0 .987.229 1.92.636 2.75H4A1.75 1.75 0 0 1 2.25 19v-1A5.75 5.75 0 0 1 8 12.25h4a5.7 5.7 0 0 1 1.9.322"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17 13.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5m.75 2.75a.75.75 0 0 0-1.5 0v2.4a.75.75 0 0 0 .471.696l1.5.6a.75.75 0 0 0 .558-1.392l-1.029-.412z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UserTime_03;
