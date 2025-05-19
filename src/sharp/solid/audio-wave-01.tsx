import React from "react";
const AudioWave_01: React.FC<
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
        d="M10 2v20H8V2zM7 6v12H5V6zM13 5v14h-2V5zM16 8v8h-2V8zM19 6v12h-2V6zM22 10v4h-2v-4zM4 10v4H2v-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AudioWave_01;
