import React from "react";
const Flowchart_01: React.FC<
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
        d="M7.25 2A.75.75 0 0 1 8 1.25h8a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H8A.75.75 0 0 1 7.25 6zM7.25 18a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75H8a.75.75 0 0 1-.75-.75zM11.47 8.47a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 0-1.06z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.294 3.293A1 1 0 0 1 4 3H8v2H5v6h4v2h-5a1 1 0 0 1-1-1V4a1 1 0 0 1 .293-.707M15 11h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4v-2h3v-6h-4zM13 6v3h-2V6zm-2 12v-3h2v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Flowchart_01;
