import React from "react";
const RotateBottomLeft: React.FC<
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
        d="M19.053 10.606a1 1 0 0 1 1.047.094l2 1.5a1 1 0 0 1-1.2 1.6l-.4-.3v5a3 3 0 0 1-3 3h-7a1 1 0 1 1 0-2h7a1 1 0 0 0 1-1v-7a1 1 0 0 1 .553-.894"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1 4.75A2.75 2.75 0 0 1 3.75 2h10a2.75 2.75 0 0 1 2.75 2.75v10a2.75 2.75 0 0 1-2.75 2.75h-10A2.75 2.75 0 0 1 1 14.75z"
      />
    </svg>
  );
};
export default RotateBottomLeft;
