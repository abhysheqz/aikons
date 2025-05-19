import React from "react";
const SquareLockPassword: React.FC<
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
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.486 15.5h.01m-5 0h.008"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.496 9.023H20V22H4V9.023h3.472m9.024 0v-2.7c-.177-3.1-2.668-4.225-4.286-4.316-1.875-.106-4.607 1.295-4.697 4.295l-.04 2.721m9.023 0H7.472"
      />
    </svg>
  );
};
export default SquareLockPassword;
