import React from "react";
const EquipmentGym_03: React.FC<
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
        d="M6.75 6.75V9h-1.5V3h1.5v2.25h10.5V3h1.5v6h-1.5V6.75zm-4-1.5V4h1.5v4h-1.5V6.75H2v-1.5zm17-1.25h1.5v1.25H22v1.5h-.75V8h-1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.33 13.665A.75.75 0 0 1 7 13.25h10a.75.75 0 0 1 .67.415l2 4A.75.75 0 0 1 19 18.75H5a.75.75 0 0 1-.67-1.085z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.25 14V8h1.5v6zm6 0V8h1.5v6zM7.25 21v-3h1.5v3zm8 0v-3h1.5v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EquipmentGym_03;
