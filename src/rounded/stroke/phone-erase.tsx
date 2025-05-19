import React from "react";
const PhoneErase: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17 7c0-2.357 0-3.536-.732-4.268S14.357 2 12 2H9c-2.357 0-3.536 0-4.268.732S4 4.643 4 7v10c0 2.357 0 3.535.732 4.268S6.643 22 9 22h3c2.357 0 3.536 0 4.268-.732C17 20.535 17 19.357 17 17"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12.5 2h-4L9 3h3zM14 9l6 6m0-6-6 6"
      />
    </svg>
  );
};
export default PhoneErase;
