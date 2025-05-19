import React from "react";
const Road_02: React.FC<
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
        d="M2 3.25a.75.75 0 0 0-.75.75v16a.75.75 0 0 0 .75.75h20a.75.75 0 0 0 .75-.75V4a.75.75 0 0 0-.75-.75zM8 11H5v2h3zm2.5 0h3v2h-3zm8.5 0h-3v2h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Road_02;
