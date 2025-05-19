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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M22 16a6 6 0 1 0-12 0 6 6 0 0 0 12 0Z"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="m13.5 16 1.75 2L19 14" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.936 12H2V2h20v7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 7h.009M12 7h.009M7 7h.009"
      />
    </svg>
  );
};
export default PasswordValidation;
