import React from "react";
const CircleLockCheck_02: React.FC<
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
        d="M15.53 17.47a.75.75 0 1 0-1.06 1.06zM16 19l-.53.53a.75.75 0 0 0 1.06 0zm2.53-1.47a.75.75 0 1 0-1.06-1.06zm2.72.47a4.75 4.75 0 0 0-4.75-4.75v1.5A3.25 3.25 0 0 1 19.75 18zm-4.75-4.75A4.75 4.75 0 0 0 11.75 18h1.5a3.25 3.25 0 0 1 3.25-3.25zM11.75 18a4.75 4.75 0 0 0 4.75 4.75v-1.5A3.25 3.25 0 0 1 13.25 18zm4.75 4.75A4.75 4.75 0 0 0 21.25 18h-1.5a3.25 3.25 0 0 1-3.25 3.25zm-2.03-4.22 1 1 1.06-1.06-1-1zm2.06 1 2-2-1.06-1.06-2 2z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.964 21.982q-.247.018-.498.018C6.619 22 3.5 18.866 3.5 15s3.119-7 6.966-7C12.833 8 15 9 16 11"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 9.5v-3a4.5 4.5 0 1 0-9 0v3"
      />
    </svg>
  );
};
export default CircleLockCheck_02;
