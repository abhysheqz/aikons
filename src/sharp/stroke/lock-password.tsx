import React from "react";
const LockPassword: React.FC<
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
        strokeWidth={1.5}
        d="M20 9H4v13h16zM7.5 9V6.5a4.5 4.5 0 0 1 9 0V9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={2}
        d="M16 15.49v.01M12 15.49v.01M8 15.49v.01"
      />
    </svg>
  );
};
export default LockPassword;
