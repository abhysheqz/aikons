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
        d="M4.5 1.75A2.75 2.75 0 0 0 1.75 4.5v15a2.75 2.75 0 0 0 2.75 2.75h15a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75zm8.51 14.75a1 1 0 0 1-2 0v-3H10a1 1 0 0 1-.705-1.709l2.01-2a1 1 0 0 1 1.414.004l1.99 2A1 1 0 0 1 14 13.5h-.99zM9 8.5a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UploadSquare_02;
