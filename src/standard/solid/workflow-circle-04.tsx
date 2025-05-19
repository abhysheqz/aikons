import React from "react";
const WorkflowCircle_04: React.FC<
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
        d="M6 1.25a3.75 3.75 0 0 0-1 7.365v6.77a3.752 3.752 0 0 0 1 7.365 3.75 3.75 0 0 0 1.002-7.364c.003-.163.007-.296.015-.412.015-.228.042-.315.06-.357a1 1 0 0 1 .54-.54c.042-.018.129-.045.357-.06C8.21 14 8.52 14 9 14h7a3 3 0 0 0 3-3V8.615a3.752 3.752 0 0 0-1-7.365 3.75 3.75 0 0 0-1 7.365V11a1 1 0 0 1-1 1H8.968c-.439 0-.817 0-1.13.021-.28.02-.56.058-.838.152V8.615A3.752 3.752 0 0 0 6 1.25"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default WorkflowCircle_04;
