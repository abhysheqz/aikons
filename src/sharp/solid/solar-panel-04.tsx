import React from "react";
const SolarPanel_04: React.FC<
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
        d="m13.546 2.122-2.088 2.924h4l-3.783 5.296-1.221-.871 2.089-2.925h-4l3.783-5.296z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M11.25 19.75h1.5v1.5h2v1.5h-5.5v-1.5h2zM9.482 8.25H5.5a.75.75 0 0 0-.728.568L3.664 13.25h7.586v-1.368L8.36 9.82zM12.75 11.417v1.833h7.586l-1.108-4.432a.75.75 0 0 0-.728-.568h-3.488zM20.71 14.75h-7.96v5H21a.75.75 0 0 0 .728-.932zM11.25 14.75v5H3a.75.75 0 0 1-.728-.932L3.29 14.75z"
      />
    </svg>
  );
};
export default SolarPanel_04;
