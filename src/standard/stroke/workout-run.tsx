import React from "react";
const WorkoutRun: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15 21.002l-.664-2.616A4.9 4.9 0 0 0 13.02 16.1L11.5 14.6M6 11.155c1-1.97 2.538-3.111 6-3.152m0 0h1.354c.393 0 .748.233.972.556.166.238.393.51.674.72m-3-1.276L10.73 9.96c-.697 1.076-1.046 1.615-1.06 2.18a2 2 0 0 0 .123.739c.195.53.7.927 1.707 1.721M15 9.28c1.155.866 2.963 1.214 5-1.078m-5 1.078L11.5 14.6M4 17.73l.678.162C6.407 18.302 8.203 17.516 9 16"
      />
    </svg>
  );
};
export default WorkoutRun;
