import React from "react";
const BedSingle_02: React.FC<
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
        d="M1.25 12.5a.75.75 0 0 1 .75-.75h6.25V9.5A.75.75 0 0 1 9 8.75h6a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 0 1 .75.75v9h-2v-3.25H3.25v3.25h-2z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.4c-1.48 0-3.19.948-4.016 2.369l-.279.481h-2.51V12H3.25V6.3c0-.525.435-.95.972-.95h2.382C7.84 3.624 9.98 2.5 12 2.5s4.161 1.124 5.395 2.85h2.383c.537 0 .972.425.972.95V12h-1.944V7.25h-2.511l-.28-.481C15.19 5.349 13.48 4.4 12 4.4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BedSingle_02;
