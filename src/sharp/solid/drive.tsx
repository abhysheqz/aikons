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
        d="M18 1.25A2.75 2.75 0 0 1 20.75 4v16A2.75 2.75 0 0 1 18 22.75H6A2.75 2.75 0 0 1 3.25 20V4A2.75 2.75 0 0 1 6 1.25zM6 18.75a1.25 1.25 0 1 0 0 2.5h12a1.25 1.25 0 0 0 0-2.5zm6-13a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5m-1 4.5A2.75 2.75 0 0 0 8.25 13v1.25h7.5V13A2.75 2.75 0 0 0 13 10.25zm6.25 9v1.51h-1.5v-1.51zm-3 1.51v-1.51h-1.5v1.51z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Drive;
