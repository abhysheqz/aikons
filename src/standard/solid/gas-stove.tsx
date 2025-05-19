import React from "react";
const GasStove: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 1.25A2.75 2.75 0 0 0 1.75 4v16a2.75 2.75 0 0 0 2.75 2.75h16A2.75 2.75 0 0 0 23.25 20V4a2.75 2.75 0 0 0-2.75-2.75zM19.5 19a1 1 0 1 0-2 0 1 1 0 1 0 2 0M5.75 19a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75M12.5 4.25a.75.75 0 0 1 .75.75v.309a4.75 4.75 0 0 1 3.941 3.941h.309a.75.75 0 0 1 0 1.5h-.309a4.75 4.75 0 0 1-3.941 3.941V15a.75.75 0 0 1-1.5 0v-.309a4.75 4.75 0 0 1-3.941-3.941H7.5a.75.75 0 0 1 0-1.5h.309a4.75 4.75 0 0 1 3.941-3.941V5a.75.75 0 0 1 .75-.75m0 3a.75.75 0 0 1-.678-.43A3.25 3.25 0 0 0 9.32 9.323a.75.75 0 0 1 0 1.356 3.25 3.25 0 0 0 2.5 2.501.75.75 0 0 1 1.357 0 3.25 3.25 0 0 0 2.501-2.5.75.75 0 0 1 0-1.357 3.25 3.25 0 0 0-2.5-2.501.75.75 0 0 1-.679.429"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GasStove;
