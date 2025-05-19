import React from "react";
const CenterFocus: React.FC<
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
        d="M9 2.5H4.5a2 2 0 0 0-2 2V8M15 2.5h4.5a2 2 0 0 1 2 2V8M15 21.5h4.5a2 2 0 0 0 2-2V16M9 21.5H4.501a2 2 0 0 1-2-2V16M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
    </svg>
  );
};
export default CenterFocus;
