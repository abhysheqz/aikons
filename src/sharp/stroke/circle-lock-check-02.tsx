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
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.964 21.982q-.247.018-.498.018C6.619 22 3.5 18.866 3.5 15s3.119-7 6.966-7C12.833 8 15 9 16 11"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 9.5v-3a4.5 4.5 0 1 0-9 0v3"
      />
      <path
        fill="currentColor"
        d="m16.056 19.333-.489.57.568.486.488-.566zM19.75 18a3.25 3.25 0 0 1-3.25 3.25v1.5A4.75 4.75 0 0 0 21.25 18zm-3.25 3.25A3.25 3.25 0 0 1 13.25 18h-1.5a4.75 4.75 0 0 0 4.75 4.75zM13.25 18a3.25 3.25 0 0 1 3.25-3.25v-1.5A4.75 4.75 0 0 0 11.75 18zm3.25-3.25A3.25 3.25 0 0 1 19.75 18h1.5a4.75 4.75 0 0 0-4.75-4.75zm-2.488 3.82 1.556 1.333.976-1.14-1.556-1.332zm2.611 1.253 2.445-2.833-1.136-.98-2.444 2.833z"
      />
    </svg>
  );
};
export default CircleLockCheck_02;
