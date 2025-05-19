import React from "react";
const Sink_02: React.FC<
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
        strokeWidth={1.5}
        d="M12 17a8 8 0 0 0 8-8H4a8 8 0 0 0 8 8Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9V3.5a1.5 1.5 0 0 1 3 0V4M9 9V6H7M15 6v3M9.5 16.5v3a2.5 2.5 0 0 0 5 0v-3"
      />
    </svg>
  );
};
export default Sink_02;
