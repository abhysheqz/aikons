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
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M18 22H2V2h9l7 7v2m-7-8.5V9h6.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M6 14v5h.5L8 16.5 9.5 19h.5v-5m2.5 5 1.75-5h.5l1.75 5m-3-1.5h2M18 14l1.75 5h.5L22 14"
      />
    </svg>
  );
};
export default Wav_02;
