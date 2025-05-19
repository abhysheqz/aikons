import React from "react";
const PassportValid: React.FC<
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
        d="M2 2.75h12.63l-3.415 3.414 4.828 4.829 6.707-6.707V21.5a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75v-18A.75.75 0 0 1 2 2.75m6.5 4.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M5.679 17.318c.448-.958 1.561-1.55 2.802-1.568 1.231-.018 2.354.532 2.84 1.568l1.358-.636c-.803-1.715-2.576-2.456-4.22-2.431-1.635.024-3.379.808-4.139 2.431z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m22.75 2.164-6.707 6.707-2.707-2.707L14.75 4.75l1.293 1.293L21.336.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PassportValid;
