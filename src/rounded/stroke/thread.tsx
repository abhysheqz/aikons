import React from "react";
const Thread: React.FC<
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
        d="M4.5 7.5h12c1.886 0 2.828 0 3.414.586s.586 1.528.586 3.414v1m-4-2h-12m12 3h-12m12 3h-12M15.5 19.5h-10a2 2 0 0 0-2 2h14a2 2 0 0 0-2-2M5.5 4.5h10a2 2 0 0 0 2-2h-14a2 2 0 0 0 2 2"
      />
    </svg>
  );
};
export default Thread;
