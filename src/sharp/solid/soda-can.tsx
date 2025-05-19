import React from "react";
const SodaCan: React.FC<
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
        d="M19 2.75H5v-1.5h14z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.25 5.272 15.924 2.48l1.152-.96 2.5 3a.75.75 0 0 1 .174.48v14a.75.75 0 0 1-.174.48l-2.5 3-1.152-.96 2.326-2.792z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.25 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m4.424 4.52 2.5-3 1.152.96L5.75 5.272h12.5L15.924 2.48l1.152-.96 2.5 3a.75.75 0 0 1 .174.48v14a.75.75 0 0 1-.174.48l-2.5 3a.75.75 0 0 1-.576.27h-9a.75.75 0 0 1-.576-.27l-2.5-3A.75.75 0 0 1 4.25 19V5a.75.75 0 0 1 .174-.48M5.75 18.729l2.101 2.521h8.298l2.101-2.521zM12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SodaCan;
