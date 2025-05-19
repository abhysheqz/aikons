import React from "react";
const MagicWand_03: React.FC<
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
        d="m14.445 14.441 2.49 2.488"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m19.424 21.407 1.992-1.99-3.485-3.483-1.991 1.99z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m3.928 3.967 2.163 5.375-3.67 3.628a.01.01 0 0 0 .005.015l5.596.297 2.52 5.215c.003.007.014.006.016 0l1.885-6.03 6.073-1.865a.01.01 0 0 0 .002-.016L13.24 7.948l-.238-5.533c0-.007-.01-.01-.015-.005l-3.75 3.727L3.94 3.956a.01.01 0 0 0-.01.01Z"
      />
    </svg>
  );
};
export default MagicWand_03;
