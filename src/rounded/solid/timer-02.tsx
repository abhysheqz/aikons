import React from "react";
const Timer_02: React.FC<
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
        d="M4.793 3.918a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414m15.414 0a1 1 0 0 1 0 1.414l-1 1a1 1 0 1 1-1.414-1.414l1-1a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.207 8.418a1 1 0 0 1 0 1.414l-2.38 2.38a2.5 2.5 0 1 1-1.414-1.414l2.38-2.38a1 1 0 0 1 1.414 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.5 2.125a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v.5a1 1 0 1 1-2 0v-.5h-1a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.977 5.325c-4.03 0-7.393 3.04-7.824 6.932a.977.977 0 0 1-1.943-.214c.542-4.884 4.744-8.668 9.767-8.668 5.398 0 9.773 4.365 9.773 9.75s-4.375 9.75-9.773 9.75H2.227a.976.976 0 1 1 0-1.95h10.75c4.318 0 7.819-3.492 7.819-7.8s-3.5-7.8-7.819-7.8M1.25 15.075c0-.538.438-.975.977-.975H5.16a.976.976 0 1 1 0 1.95H2.227a.976.976 0 0 1-.977-.975m0 3.413c0-.539.438-.976.977-.976h4.887a.976.976 0 1 1 0 1.95H2.227a.976.976 0 0 1-.977-.974"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Timer_02;
