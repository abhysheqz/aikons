import React from "react";
const Projector_01: React.FC<
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
        d="M11.25 10a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0M6.317 18.052a1 1 0 0 1 .632 1.265l-1 3a1 1 0 0 1-1.897-.633l1-3a1 1 0 0 1 1.265-.632M17.684 18.052a1 1 0 0 0-.633 1.265l1 3a1 1 0 0 0 1.897-.633l-1-3a1 1 0 0 0-1.265-.632"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.5 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m-4.707 2.293a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414m8 0a1 1 0 1 1 1.414 1.414l-1 1a1 1 0 1 1-1.414-1.414zM9.75 10q0-.382.048-.75H4A2.75 2.75 0 0 0 1.25 12v5A2.75 2.75 0 0 0 4 19.75h16A2.75 2.75 0 0 0 22.75 17v-5a2.75 2.75 0 0 0-1.518-2.46q.018.228.018.46a5.75 5.75 0 0 1-11.5 0m1.5 0q0-.385.066-.75h8.368q.065.365.066.75a4.25 4.25 0 0 1-8.5 0M5.5 12.5a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Projector_01;
