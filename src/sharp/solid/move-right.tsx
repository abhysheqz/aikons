import React from "react";
const MoveRight: React.FC<
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
        d="M1.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.767 11h8.511l-1.925-2.206L18.877 7.5 22.75 12l-3.872 4.5-1.525-1.294L19.278 13h-8.511z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoveRight;
