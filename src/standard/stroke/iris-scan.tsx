import React from "react";
const IrisScan: React.FC<
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
        d="M8 2.5H4.5a2 2 0 0 0-2 2V8M16 2.5h3.5a2 2 0 0 1 2 2V8M16 21.5h3.5a2 2 0 0 0 2-2V16M8 21.5H4.5a2 2 0 0 1-2-2V16M3 12h18M6 12a6 6 0 0 1 6-6 3 3 0 0 0 4.8 2.4A5.97 5.97 0 0 1 18 12m-.803 3A6 6 0 0 1 12 18a6 6 0 0 1-5.197-3"
      />
    </svg>
  );
};
export default IrisScan;
