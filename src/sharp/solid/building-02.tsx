import React from "react";
const Building_02: React.FC<
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
        d="M4.47 1.47A.75.75 0 0 1 5 1.25h14a.75.75 0 0 1 .75.75v20a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 .22-.53M8.25 17a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5h-1.5v-4.25h-4.5V22h-1.5zM15 5.25H9v1.5h6zm0 3.5H9v1.5h6zm0 3.5H9v1.5h6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21 22.75H3v-2h18z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Building_02;
