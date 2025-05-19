import React from "react";
const Folder_03: React.FC<
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
        d="M10.576 2.25H3.25v8h-2l2.256 11.5h15.86l3.384-11.5h-2V5.1h-8.23zm8.23 8V7H11.48L9.535 4.15h-4.34v6.1z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Folder_03;
