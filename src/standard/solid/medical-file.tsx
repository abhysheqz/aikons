import React from "react";
const MedicalFile: React.FC<
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
        d="M17.386 13.007a1 1 0 0 1 .988.508l2.212 3.985h.914a1 1 0 1 1 0 2h-1.502a1 1 0 0 1-.875-.515l-1.325-2.388-1.336 4.678a1 1 0 0 1-1.836.21L12.41 17.5H11.5a1 1 0 1 1 0-2H13a1 1 0 0 1 .874.514l1.328 2.39 1.336-4.679a1 1 0 0 1 .848-.718"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.329 1a3 3 0 0 0-2.12.877L2.381 7.693A3 3 0 0 0 1.5 9.817v10.185a3 3 0 0 0 3 3h5a1 1 0 1 0 0-2h-5a1 1 0 0 1-1-1v-10h4a3 3 0 0 0 3-3V3h7a1 1 0 0 1 1 1v6.5a1 1 0 1 0 2 0V4a3 3 0 0 0-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MedicalFile;
