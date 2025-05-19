import React from "react";
const EaseOut: React.FC<
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
        d="M2.75 19.625s.467-1.341.89-2.108a43 43 0 0 1 3.697-5.633C10.501 7.834 15.261 3.5 21.25 3.5v2c-5.01 0-9.25 3.666-12.337 7.616a41 41 0 0 0-3.522 5.367c-.404.733-.842 2.017-.842 2.017z"
      />
    </svg>
  );
};
export default EaseOut;
