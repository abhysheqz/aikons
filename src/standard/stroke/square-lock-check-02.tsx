import React from "react";
const SquareLockCheck_02: React.FC<
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15.5 9V6.5a4.5 4.5 0 1 0-9 0V9M19 11.5V11a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2l.001 9a2 2 0 0 0 2 2H10.5"
      />
      <path
        fill="currentColor"
        d="M16.03 17.47a.75.75 0 1 0-1.06 1.06zM16.5 19l-.53.53a.75.75 0 0 0 1.06 0zm2.53-1.47a.75.75 0 1 0-1.06-1.06zm2.72.47A4.75 4.75 0 0 0 17 13.25v1.5A3.25 3.25 0 0 1 20.25 18zM17 13.25A4.75 4.75 0 0 0 12.25 18h1.5A3.25 3.25 0 0 1 17 14.75zM12.25 18A4.75 4.75 0 0 0 17 22.75v-1.5A3.25 3.25 0 0 1 13.75 18zM17 22.75A4.75 4.75 0 0 0 21.75 18h-1.5A3.25 3.25 0 0 1 17 21.25zm-2.03-4.22 1 1 1.06-1.06-1-1zm2.06 1 2-2-1.06-1.06-2 2z"
      />
    </svg>
  );
};
export default SquareLockCheck_02;
