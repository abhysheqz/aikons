import React from "react";
const PictureInPictureOn: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 20H2V4h20v7.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14 14h8v6h-8zM5.982 7.987l4.478 4.484m-2.974.542h3.515V9.45"
      />
    </svg>
  );
};
export default PictureInPictureOn;
