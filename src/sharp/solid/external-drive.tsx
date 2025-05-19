import React from "react";
const ExternalDrive: React.FC<
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
        d="M3.25 2A.75.75 0 0 1 4 1.25h16a.75.75 0 0 1 .75.75v12.25H3.25zm0 13.75h17.5V22a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75zm13.747 2.5h-2.009v2h2.01zM11 6.75H7v-1.5h4zm-4 3h4v-1.5H7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ExternalDrive;
