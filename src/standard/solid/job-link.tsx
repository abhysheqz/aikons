import React from "react";
const JobLink: React.FC<
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
        d="M7.082 3.45A2 2 0 0 1 9.005 2h4.491a2 2 0 0 1 1.923 1.45l.793 2.775-1.923.55L13.496 4H9.005l-.793 2.775-1.923-.55zM15.75 16.75a2.25 2.25 0 0 0 0 4.5.75.75 0 0 1 0 1.5 3.75 3.75 0 1 1 0-7.5.75.75 0 0 1 0 1.5M18 16a.75.75 0 0 1 .75-.75 3.75 3.75 0 1 1 0 7.5.75.75 0 0 1 0-1.5 2.25 2.25 0 0 0 0-4.5A.75.75 0 0 1 18 16m-3 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3A.75.75 0 0 1 15 19"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.75 5.75A2.75 2.75 0 0 0 1 8.5V20a2.75 2.75 0 0 0 2.75 2.75h8.326a5.25 5.25 0 0 1 3.674-9h3c1.008 0 1.95.284 2.75.777V8.5a2.75 2.75 0 0 0-2.75-2.75z"
      />
    </svg>
  );
};
export default JobLink;
