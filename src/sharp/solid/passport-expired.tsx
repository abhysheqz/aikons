import React from "react";
const PassportExpired: React.FC<
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
        d="M2 3.25h11.8l1.708 1.707-2.293 2.293 3.535 3.536 2.293-2.293 2.293 2.293 1.414-1.414V22a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75V4A.75.75 0 0 1 2 3.25m6.5 4.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M5.678 17.818c.448-.958 1.56-1.55 2.802-1.568 1.231-.018 2.354.532 2.84 1.568l1.358-.636c-.803-1.715-2.576-2.456-4.22-2.431-1.636.024-3.379.808-4.139 2.431z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m17.629 4.957-2.293-2.293L16.75 1.25l2.293 2.293 2.293-2.293 1.414 1.414-2.293 2.293L22.75 7.25l-1.414 1.414-2.293-2.293-2.293 2.293-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PassportExpired;
