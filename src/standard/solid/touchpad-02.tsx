import React from "react";
const Touchpad_02: React.FC<
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
        d="M11.75 7a2.25 2.25 0 1 1 4.5 0v4.25H19a3.25 3.25 0 0 1 3.25 3.25V19A3.25 3.25 0 0 1 19 22.25h-4.851a2.75 2.75 0 0 1-2.208-1.11l-3.718-5.005a2.25 2.25 0 0 1-.003-2.755 2.15 2.15 0 0 1 3.118-.308l.412.34z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3V9a1 1 0 1 1-2 0V4.5a1 1 0 0 0-1-1h-15a1 1 0 0 0-1 1v9.998a1 1 0 0 0 1 1H5a1 1 0 1 1 0 2h-.5a3 3 0 0 1-3-3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Touchpad_02;
