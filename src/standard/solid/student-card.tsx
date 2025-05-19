import React from "react";
const StudentCard: React.FC<
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
        d="M5 3.25A3.75 3.75 0 0 0 1.25 7v10A3.75 3.75 0 0 0 5 20.75h14A3.75 3.75 0 0 0 22.75 17V7A3.75 3.75 0 0 0 19 3.25zm7.106 11.961c-.95-1.3-2.267-1.972-3.63-1.954-1.355.018-2.65.717-3.575 1.946a.75.75 0 0 0 .599 1.2h6a.75.75 0 0 0 .606-1.192M8.5 8.25a2 2 0 1 0 0 4 2 2 0 0 0 0-4m5.5 1a.75.75 0 1 0 0 1.5h5a.75.75 0 1 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h3a.75.75 0 1 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StudentCard;
