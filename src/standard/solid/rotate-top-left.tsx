import React from "react";
const RotateTopLeft: React.FC<
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
        d="M13.6 1.2a1 1 0 0 1 .2 1.4l-.3.4h5a3 3 0 0 1 3 3v7a1 1 0 0 1-2 0V6a1 1 0 0 0-1-1h-7a1 1 0 0 1-.8-1.6l1.5-2a1 1 0 0 1 1.4-.2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2 9.75A2.75 2.75 0 0 1 4.75 7h10a2.75 2.75 0 0 1 2.75 2.75v10a2.75 2.75 0 0 1-2.75 2.75h-10A2.75 2.75 0 0 1 2 19.75z"
      />
    </svg>
  );
};
export default RotateTopLeft;
