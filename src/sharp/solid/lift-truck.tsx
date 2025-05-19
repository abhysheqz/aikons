import React from "react";
const LiftTruck: React.FC<
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
        d="M14 15.75a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M6.5 18.25a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.5 12V4h2l-.001 13H22.5v2h-3.001a1 1 0 0 1-1-1v-4H16.5v-2zM3.712 3.25a.965.965 0 0 0-.962.968v10.495a3.75 3.75 0 0 1 5 3.537h2.5a3.75 3.75 0 0 1 5-3.537V8.09a.97.97 0 0 0-.36-.756l-4.809-3.87a.96.96 0 0 0-.6-.213zm9.614 8V8.554L9.142 5.186h-4.47V7.25h1.827a.75.75 0 0 1 .6.3l2.775 3.7z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LiftTruck;
