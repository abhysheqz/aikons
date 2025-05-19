import React from "react";
const SwipeDown_03: React.FC<
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
        d="M7.254 4.75a2.5 2.5 0 0 1 5 0v4.978H16a3.75 3.75 0 0 1 3.75 3.75V19A3.75 3.75 0 0 1 16 22.75H8a.75.75 0 0 1-.624-.334l-4.593-6.885a2.49 2.49 0 0 1 3.576-3.43l.896.768z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.543 1.25v3.586l.793-.793 1.414 1.414-3.207 3.207-3.207-3.207 1.414-1.414.793.793V1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SwipeDown_03;
