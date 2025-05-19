import React from "react";
const Megaphone_01: React.FC<
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
        d="M6.965 12.551v5.955l2.86 3.458a.1.1 0 0 0 .146.007l2.916-2.886a.1.1 0 0 0-.016-.155l-2.97-1.932-1.906-4.24"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.467 12.516V6.52"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.002 9.737V6.542h4.421L17.925 2.03a.1.1 0 0 1 .116.028c2.21 2.62 2.587 4.144 2.818 6.304.102.957.079 1.927-.065 2.879-.311 2.057-.675 3.257-2.753 5.761a.1.1 0 0 1-.117.029l-10.5-4.512H3.001V9.324"
      />
    </svg>
  );
};
export default Megaphone_01;
