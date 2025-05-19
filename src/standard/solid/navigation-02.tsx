import React from "react";
const Navigation_02: React.FC<
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
        d="M9.25 12a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M12 1.25a.75.75 0 0 1 .643.364l3 5A.75.75 0 0 1 15 7.75H9a.75.75 0 0 1-.643-1.136l3-5A.75.75 0 0 1 12 1.25M12 22.75a.75.75 0 0 0 .643-.364l3-5A.75.75 0 0 0 15 16.25H9a.75.75 0 0 0-.643 1.136l3 5a.75.75 0 0 0 .643.364M7.37 8.347A.75.75 0 0 1 7.75 9v6a.75.75 0 0 1-1.136.643l-5-3a.75.75 0 0 1 0-1.286l5-3a.75.75 0 0 1 .756-.01M16.63 8.347a.75.75 0 0 1 .756.01l5 3a.75.75 0 0 1 0 1.286l-5 3A.75.75 0 0 1 16.25 15V9c0-.27.145-.52.38-.653"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Navigation_02;
