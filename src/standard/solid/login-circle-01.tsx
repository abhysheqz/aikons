import React from "react";
const LoginCircle_01: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-.5 8.25a1 1 0 0 0-1.707-.707l-2.5 2.5a1 1 0 0 0 0 1.414l2.5 2.5A1 1 0 0 0 11.5 14.5V13H16a1 1 0 1 0 0-2h-4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LoginCircle_01;
