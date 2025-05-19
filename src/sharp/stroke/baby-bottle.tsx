import React from "react";
const BabyBottle: React.FC<
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
        d="M17 10.494s1 3.002 1 6.003S17 22 17 22H7s-1-2.5-1-5.503c0-3.001 1-6.003 1-6.003M14 13.995h3.5M14 17.997h3.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.967 10.504h-10c.045-.664.243-1.546 1.057-2.422.813-.875 2.087-.565 2.425-1.854.25-.953-.861-1.773-.296-2.996.568-1.227 1.826-1.541 2.889-.93.768.443 1.093 1.425.828 2.274-.174.56-.43.907-.374 1.548.108 1.225 1.457 1.077 2.28 1.865.512.491 1.083.994 1.191 2.515Z"
      />
    </svg>
  );
};
export default BabyBottle;
