import React from "react";
const AiPhone_02: React.FC<
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
        strokeWidth={1.5}
        d="M16 18.5V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 19h.009"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20 6.5-2 2h-3m5-1a1 1 0 1 1 0-2 1 1 0 0 1 0 2M20 12h-8m8 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2M20 17.5l-2-2h-3m5 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
      />
    </svg>
  );
};
export default AiPhone_02;
