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
        d="m18.92 10.1 3.7-4.439q.128.4.13.839v12A2.75 2.75 0 0 1 20 21.25H4a2.75 2.75 0 0 1-2.75-2.75v-12A2.75 2.75 0 0 1 4 3.75h9.409a2.5 2.5 0 0 0-.677 4.018l2.5 2.5a2.5 2.5 0 0 0 3.689-.168M8.5 7.362a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M5.68 17.08c.448-.958 1.56-1.55 2.801-1.568 1.232-.018 2.355.532 2.84 1.568a.75.75 0 0 0 1.358-.636c-.802-1.715-2.575-2.456-4.22-2.432-1.635.025-3.378.809-4.138 2.432a.75.75 0 0 0 1.358.636"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.64 1.732a1 1 0 0 1 .128 1.408l-5 6a1 1 0 0 1-1.475.067l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.726 1.726 4.299-5.16a1 1 0 0 1 1.408-.127"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PassportValid;
