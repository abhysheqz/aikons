import React from "react";
const RotateBottomRight: React.FC<
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
        d="M4.447 8.606A1 1 0 0 1 5 9.5v9a1 1 0 0 0 1 1h7a1 1 0 0 1 0 2H6a3 3 0 0 1-3-3v-7l-.4.3a1 1 0 1 1-1.2-1.6l2-1.5a1 1 0 0 1 1.047-.094"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 4.75A2.75 2.75 0 0 1 9.75 2h10a2.75 2.75 0 0 1 2.75 2.75v10a2.75 2.75 0 0 1-2.75 2.75h-10A2.75 2.75 0 0 1 7 14.75z"
      />
    </svg>
  );
};
export default RotateBottomRight;
