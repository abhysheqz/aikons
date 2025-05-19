import React from "react";
const Drive: React.FC<
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
        d="M18 1.25A2.75 2.75 0 0 1 20.75 4v16A2.75 2.75 0 0 1 18 22.75H6A2.75 2.75 0 0 1 3.25 20V4A2.75 2.75 0 0 1 6 1.25zM6 18.75a1.25 1.25 0 1 0 0 2.5h12a1.25 1.25 0 0 0 0-2.5zm6-13a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m-1 4.5A2.75 2.75 0 0 0 8.25 13v.5c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75V13A2.75 2.75 0 0 0 13 10.25zm5.5 9a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0V20a.75.75 0 0 1 .75-.75m-2.25.75a.75.75 0 0 0-1.5 0v.01a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Drive;
