import React from "react";
const BiometricDevice: React.FC<
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
        d="M19.75 1.25H4.25v21.5h15.5zM12 5.75a4.75 4.75 0 0 0-4.75 4.75v3.25h1.5V10.5a3.25 3.25 0 0 1 6.5 0v3.25h1.5V10.5A4.75 4.75 0 0 0 12 5.75M9.75 10.5a2.25 2.25 0 0 1 4.5 0v1.25h-1.5V10.5a.75.75 0 0 0-1.5 0v4.25h-1.5zm4.5 2.25v3h-1.5v-3zM13 20.01V18h-2v2.01z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BiometricDevice;
