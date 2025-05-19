import React from "react";
const AudioWave_02: React.FC<
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
        d="M10.5 4a.5.5 0 0 0-.5.5v12a2.5 2.5 0 0 1-5 0v-7a.5.5 0 0 0-1 0V15H2V9.5a2.5 2.5 0 0 1 5 0v7a.5.5 0 0 0 1 0v-12a2.5 2.5 0 0 1 5 0v15a.5.5 0 0 0 1 0v-11a2.5 2.5 0 0 1 5 0v7a.5.5 0 0 0 1 0V11h2v4.5a2.5 2.5 0 0 1-5 0v-7a.5.5 0 0 0-1 0v11a2.5 2.5 0 0 1-5 0v-15a.5.5 0 0 0-.5-.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AudioWave_02;
