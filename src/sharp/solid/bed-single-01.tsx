import React from "react";
const BedSingle_01: React.FC<
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
        d="M1.25 12.5c0-.553.438-1 .977-1H8.25v-2A.75.75 0 0 1 9 8.75h6a.75.75 0 0 1 .75.75v2h6.023c.54 0 .977.447.977 1v9h-1.954v-3.25H3.204v3.25H1.25z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.194 6.978V12.5H3.25V6.032l.35-.3C5.957 3.707 8.855 2.5 12 2.5s6.042 1.207 8.4 3.232l.35.3V12.5h-1.944V6.978C16.83 5.401 14.494 4.5 12 4.5s-4.83.9-6.806 2.478"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BedSingle_01;
