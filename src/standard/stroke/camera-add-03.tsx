import React from "react";
const CameraAdd_03: React.FC<
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
        d="M2 8v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3.5l-1.406-2.11A2 2 0 0 0 13.43 3h-2.86a2 2 0 0 0-1.664.89L7.5 6H4a2 2 0 0 0-2 2M12 9v8m4-4H8"
      />
    </svg>
  );
};
export default CameraAdd_03;
