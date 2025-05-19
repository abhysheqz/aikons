import React from "react";
const Briefcase_02: React.FC<
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
        d="M1.75 6a.75.75 0 0 1 .75-.75h19a.75.75 0 0 1 .75.75v5.55L12 14.786 1.75 11.55z"
      />
      <path
        fill="currentColor"
        d="M21.286 21.5a.75.75 0 0 1-.75.75H3.461a.75.75 0 0 1-.75-.75v-8.073L12 16.36l9.287-2.933z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 2.75a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3.5h-2v-2.5h-5v2.5h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Briefcase_02;
