import React from "react";
const MinimizeScreen: React.FC<
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
        d="M3.932 2.952a.977.977 0 0 0-.977.977v5.003a.977.977 0 0 1-1.955 0V3.927A2.93 2.93 0 0 1 3.932 1h15.636A2.93 2.93 0 0 1 22.5 3.93v14.616a2.93 2.93 0 0 1-2.918 2.929l-5.367.026a.977.977 0 1 1-.01-1.952l5.368-.026a.977.977 0 0 0 .973-.977V4.333L16.552 8.32l1.264 1.263a.976.976 0 0 1-.691 1.666h-3.91a.977.977 0 0 1-.976-.976V6.369a.976.976 0 0 1 1.668-.69L15.17 6.94l3.992-3.989z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 13.5a2 2 0 0 1 2-2h1.5a1 1 0 1 1 0 2H3V15a1 1 0 1 1-2 0zm6.5-1a1 1 0 0 1 1-1H10a2 2 0 0 1 2 2V15a1 1 0 1 1-2 0v-1.5H8.5a1 1 0 0 1-1-1M2 18a1 1 0 0 1 1 1v1.5h1.5a1 1 0 1 1 0 2H3a2 2 0 0 1-2-2V19a1 1 0 0 1 1-1m9 0a1 1 0 0 1 1 1v1.5a2 2 0 0 1-2 2H8.5a1 1 0 1 1 0-2H10V19a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MinimizeScreen;
