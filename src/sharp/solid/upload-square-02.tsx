import React from "react";
const UploadSquare_02: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm9.75 10.186v4.439h-1.5v-4.44l-1.281 1.026-.938-1.172L12 9.915l2.969 2.374-.937 1.172zM15 7.124v1.5H9v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UploadSquare_02;
