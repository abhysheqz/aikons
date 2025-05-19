import React from "react";
const PasswordValidation: React.FC<
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
        d="M3.75 2A2.75 2.75 0 0 0 1 4.75v12a2.75 2.75 0 0 0 2.75 2.75h6.02a7.5 7.5 0 0 1 12.73-7.566V4.75A2.75 2.75 0 0 0 19.75 2zm2.09 3.568a.68.68 0 0 1 .913-.23l4.437 2.486a1.15 1.15 0 0 0 1.12 0l4.437-2.487a.68.68 0 0 1 .912.23.627.627 0 0 1-.24.877L12.982 8.93a2.53 2.53 0 0 1-2.464 0L6.081 6.444a.627.627 0 0 1-.24-.876M16.75 11a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5m2.576 4.73a.75.75 0 0 0-1.152-.96L16.2 17.139l-.92-.92a.75.75 0 1 0-1.06 1.061l1.5 1.5a.75.75 0 0 0 1.106-.05z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PasswordValidation;
