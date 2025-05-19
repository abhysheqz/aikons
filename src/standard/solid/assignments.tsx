import React from "react";
const Assignments: React.FC<
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
        d="M9.75 2A2.75 2.75 0 0 0 7 4.75v14a2.75 2.75 0 0 0 2.75 2.75h4.539l-1.6-2a2 2 0 0 1 3.123-2.5l.541.678 3.923-4.28c.333-.363.77-.575 1.224-.632V4.75A2.75 2.75 0 0 0 18.75 2zM10 6.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m.75 3.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.257 14.197a.75.75 0 0 1 .046 1.06l-5.5 6a.75.75 0 0 1-1.139-.039l-2-2.5a.75.75 0 0 1 1.172-.936l1.453 1.816 4.908-5.355a.75.75 0 0 1 1.06-.046"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.75 2A1.75 1.75 0 0 0 1 3.75V6h4.5V3.75A1.75 1.75 0 0 0 3.75 2zM5.5 7.5H1v10.75c0 .136.037.27.107.386l1.5 2.5a.75.75 0 0 0 1.286 0l1.5-2.5a.75.75 0 0 0 .107-.386z"
      />
    </svg>
  );
};
export default Assignments;
