import React from "react";
const SwipeDown_07: React.FC<
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
        d="M7.895 14.686V3.544a1.296 1.296 0 0 1 2.593 0v8.44a.45.45 0 1 0 .9 0v-3.19s.22-.033.363-.044c.292-.024.75 0 .75 0 .526 0 1.01.18 1.392.482v3.622a.45.45 0 1 0 .9 0V9.75h.708c.735 0 1.388.352 1.798.897v2.852a.45.45 0 1 0 .9 0v-2.75h.302a2.25 2.25 0 0 1 2.25 2.25v6a3.75 3.75 0 0 1-3.75 3.75H9.096a2.75 2.75 0 0 1-2.318-1.269l-4.504-7.056a1.547 1.547 0 0 1 2.41-1.915l2.44 2.493a.45.45 0 0 0 .77-.316"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.576 5.617A1 1 0 0 1 16.5 5h1V2a1 1 0 1 1 2 0v3h1a1 1 0 0 1 .707 1.707l-2 2a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1-.217-1.09"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SwipeDown_07;
