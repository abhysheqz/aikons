import React from "react";
const Wav_02: React.FC<
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
        d="M9.043 13.25h1.5v6.5H8.868l-1.075-1.792-1.075 1.792H5.043v-6.5h1.5v3.876l1.25-2.084 1.25 2.084z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.236 18.25H13.35l-.449 1.5h-1.564l2.174-6.5h1.564l2.174 6.5h-1.564zm-.525-1.5h-.836l.418-1.193z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m20.575 19.75 2.174-6.499-1.578-.001-1.378 4.194-1.377-4.194-1.579.001 2.174 6.499z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m1.251 1.25-.001 21.5h17.5V21H3.793v-9l14.957.002V8.629L11.36 1.25zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Wav_02;
