import React from "react";
const LockComputer: React.FC<
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
        d="M18.5 2.75c-.69 0-1.25.56-1.25 1.25v.75h2.5V4c0-.69-.56-1.25-1.25-1.25m2.75 2V4a2.75 2.75 0 1 0-5.5 0v.75H15a.75.75 0 0 0-.75.75V11c0 .414.336.75.75.75h7a.75.75 0 0 0 .75-.75V5.5a.75.75 0 0 0-.75-.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 1h7a1 1 0 1 1 0 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1.5a1 1 0 0 1 2 0V16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 15a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M12 17a1 1 0 0 1 1 1l.002 2.997 3 .003a1 1 0 0 1-.003 2l-3.995-.005h-.002l-4 .005a1 1 0 0 1-.003-2l3.004-.003L11 18A1 1 0 0 1 12 17"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LockComputer;
