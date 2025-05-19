import React from "react";
const CallInternal: React.FC<
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
        d="M5.083 11.746a21.4 21.4 0 0 0 3.165 4.006 21.5 21.5 0 0 0 4.006 3.165l3.578-3.838 6.918 3.94c-1.004 1.864-3.412 4.248-6.472 3.632-1.445-.292-2.872-.778-4.597-1.768a23.3 23.3 0 0 1-4.833-3.726 23.3 23.3 0 0 1-3.731-4.838c-.99-1.725-1.476-3.152-1.768-4.597-.616-3.06 1.768-5.468 3.632-6.472l3.94 6.918z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.043 1.25 3.707 3.707-3.707 3.707L17.63 7.25l1.293-1.293H13.75l1.293 1.293-1.414 1.414-3.707-3.707 3.707-3.707 1.414 1.414-1.293 1.293h5.172l-1.293-1.293z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CallInternal;
