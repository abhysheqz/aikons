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
        d="M15.293 2.293a1 1 0 0 1 1.414 0L19 4.586l2.293-2.293a1 1 0 1 1 1.414 1.414L20.414 6l2.293 2.293a1 1 0 0 1-1.414 1.414L19 7.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.586 6l-2.293-2.293a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 4.25h9.834q.16.28.398.518L15.465 6l-1.233 1.232a2.5 2.5 0 0 0 3.536 3.536L19 9.536l1.232 1.232a2.5 2.5 0 0 0 2.518.617V19A2.75 2.75 0 0 1 20 21.75H4A2.75 2.75 0 0 1 1.25 19V7A2.75 2.75 0 0 1 4 4.25m4.5 3.111a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M5.68 17.08c.448-.958 1.56-1.55 2.801-1.568 1.232-.018 2.355.532 2.84 1.568a.75.75 0 0 0 1.358-.636c-.802-1.715-2.575-2.456-4.22-2.432-1.635.025-3.378.809-4.138 2.432a.75.75 0 0 0 1.358.636"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PassportExpired;
