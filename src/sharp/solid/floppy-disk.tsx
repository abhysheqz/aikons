import React from "react";
const FloppyDisk: React.FC<
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
        d="M2.25 2A.75.75 0 0 1 3 1.25h12.272l6.478 5.399V22a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zM14.5 8h-5V6h5zM8 15v5.75h8V15z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default FloppyDisk;
