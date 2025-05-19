import React from "react";
const AppleStocks: React.FC<
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
        d="M1.75 15.25v4.25a2.75 2.75 0 0 0 2.75 2.75h9.75v-6.492a.75.75 0 0 1 1.5 0v6.492h3.75a2.75 2.75 0 0 0 2.75-2.75v-4.75H20.5a.75.75 0 0 1-.624-.334l-1.493-2.239-.853.853a.75.75 0 0 1-1.181-.158l-1.216-2.127a2 2 0 0 1-.17.005l-2.792 5.586a.75.75 0 0 1-1.342 0l-1.777-3.554-.863 2.014a.75.75 0 0 1-1.332.09l-.945-1.575-1.327 1.658A.75.75 0 0 1 4 15.25z"
      />
      <path
        fill="currentColor"
        d="M4.5 1.75h9.75v3.51a.75.75 0 0 0 1.5 0V1.75h3.75a2.75 2.75 0 0 1 2.75 2.75v8.75h-1.349l-1.777-2.666a.75.75 0 0 0-1.155-.114l-.805.805-.729-1.274a1.75 1.75 0 1 0-2.814.078L11.5 14.323l-1.83-3.658a.75.75 0 0 0-1.36.04l-.922 2.151-.745-1.242a.75.75 0 0 0-1.229-.083L3.639 13.75H1.75V4.5A2.75 2.75 0 0 1 4.5 1.75"
      />
    </svg>
  );
};
export default AppleStocks;
