import React from "react";
const Sink_01: React.FC<
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
        d="M12 14a7 7 0 0 0 7-7H5a7 7 0 0 0 7 7Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 7V3.5a1.5 1.5 0 0 1 3 0V4M10 7V4H8M14 14v8m-4-8v8M8 22h8"
      />
    </svg>
  );
};
export default Sink_01;
