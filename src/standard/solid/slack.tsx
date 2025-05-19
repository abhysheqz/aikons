import React from "react";
const Slack: React.FC<
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
        d="M12.25 3.75a2.5 2.5 0 0 1 5 0v5.5a2.5 2.5 0 0 1-5 0zM6.75 14.75a2.5 2.5 0 0 1 5 0v5.5a2.5 2.5 0 0 1-5 0zM12.25 14.75a2.5 2.5 0 0 1 2.5-2.5h5.5a2.5 2.5 0 0 1 0 5h-5.5a2.5 2.5 0 0 1-2.5-2.5M1.25 9.25a2.5 2.5 0 0 1 2.5-2.5h5.5a2.5 2.5 0 0 1 0 5h-5.5a2.5 2.5 0 0 1-2.5-2.5M6.25 3.75a2.5 2.5 0 0 1 5 0V5.5a.75.75 0 0 1-.75.75H8.75a2.5 2.5 0 0 1-2.5-2.5M12.75 18.5a.75.75 0 0 1 .75-.75h1.75a2.5 2.5 0 1 1-2.5 2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.75 8.75a2.5 2.5 0 1 1 2.5 2.5H18.5a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 15.25a2.5 2.5 0 0 1 2.5-2.5H5.5a.75.75 0 0 1 .75.75v1.75a2.5 2.5 0 0 1-5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Slack;
