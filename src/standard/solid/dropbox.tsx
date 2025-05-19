import React from "react";
const Dropbox: React.FC<
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
        d="M6.75 2.54a1.92 1.92 0 0 1 2.16.09q.03.022.058.048L12 5.479l3.032-2.801.058-.048a1.92 1.92 0 0 1 2.16-.09l3.604 2.263c1.02.64 1.143 2.052.215 2.842l-.032.026-2.299 1.748 2.367 1.804.031.025a1.71 1.71 0 0 1-.175 2.753l-3.684 2.435a1.92 1.92 0 0 1-2.267-.121L12 13.657l-3.01 2.658-.029.024a1.92 1.92 0 0 1-2.238.097L3.04 14a1.71 1.71 0 0 1-.144-2.778L5.262 9.42l-2.3-1.748-.031-.026c-.928-.79-.805-2.201.215-2.842zm1.316 6.962L12 11.646l3.934-2.144L12 7.355z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m5.25 17.26.647.428a3.42 3.42 0 0 0 4.057-.224L12 15.658l2.047 1.806q.027.026.057.048c1.154.92 2.78.982 4 .176l.646-.427v1.24a1.75 1.75 0 0 1-.967 1.565l-5 2.5a1.75 1.75 0 0 1-1.565 0l-5-2.5A1.75 1.75 0 0 1 5.25 18.5z"
      />
    </svg>
  );
};
export default Dropbox;
