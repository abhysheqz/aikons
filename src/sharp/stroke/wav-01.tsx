import React from "react";
const Wav_01: React.FC<
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
        d="M20 13V9l-7-7H4v11m9-10.5V9h6.5M4 16v6h.5l2-3 2 3H9v-6m2.25 6L13 16h.5l1.75 6m-3-2h2M16 16l1.75 6h.5L20 16"
      />
    </svg>
  );
};
export default Wav_01;
