import React from "react";
const CallReceived: React.FC<
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
        d="M13 5.5 15.5 3M13 5.5 15.5 8M13 5.5h4a3 3 0 0 1 3 3V11M4 12l4-4-3-6-2.414 2.414a1.88 1.88 0 0 0-.566 1.414c.419 8.73 7.422 15.733 16.152 16.152.53.026 1.039-.19 1.414-.566L22 19l-6-3-4 4"
      />
    </svg>
  );
};
export default CallReceived;
