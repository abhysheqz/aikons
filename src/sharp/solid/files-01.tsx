import React from "react";
const Files_01: React.FC<
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
        d="M5.747 1.25h10.061l5.44 5.44v13.06h-15.5zm14 6.06-4.56-4.56v4.56zm-4.998 2.94h-5.5v1.5h5.5zm3 4h-8.5v1.5h8.5z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M4.5 4.25H2.75v18.5h15.5V21H4.5z" />
    </svg>
  );
};
export default Files_01;
