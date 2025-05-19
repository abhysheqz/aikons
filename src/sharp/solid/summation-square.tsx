import React from "react";
const SummationSquare: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zM16 8a1 1 0 0 0-1-1l-6 .002a1 1 0 0 0-.752 1.66l2.923 3.336-2.924 3.341A1 1 0 0 0 9 16.998l6-.003a1 1 0 0 0 1-1v-1.997h-2v.998h-2.795l2.625-2.999-2.625-2.996h2.796v.997h2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SummationSquare;
