import React from "react";
const BedDouble: React.FC<
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
        d="M2.227 11.5a.99.99 0 0 0-.977 1v9h1.955v-3.25h17.59v3.25h1.955v-9c0-.552-.437-1-.977-1H17.75V9.75A.75.75 0 0 0 17 9h-3.5a.75.75 0 0 0-.75.75v1.75h-1.5V9.75A.75.75 0 0 0 10.5 9H7a.75.75 0 0 0-.75.75v1.75z"
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
export default BedDouble;
