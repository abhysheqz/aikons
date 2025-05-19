import React from "react";
const UploadCircle_02: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25M13.01 17a1 1 0 0 1-2 0v-3H10a1 1 0 0 1-.705-1.709l2.01-2a1 1 0 0 1 1.414.004l1.99 2A1 1 0 0 1 14 14h-.99zM9 9a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UploadCircle_02;
