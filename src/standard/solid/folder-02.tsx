import React from "react";
const Folder_02: React.FC<
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
        d="M1.25 4.2A1.95 1.95 0 0 1 3.2 2.25h3.93a1.95 1.95 0 0 1 1.499.702l1.853 2.223h7.343A2.925 2.925 0 0 1 20.75 8.1v4.336H18.8V8.1a.975.975 0 0 0-.975-.975h-7.8a.98.98 0 0 1-.749-.35L7.131 4.2H3.2v16.575a.975.975 0 1 1-1.95 0z"
      />
      <path
        fill="currentColor"
        d="M5.052 11.35a1.75 1.75 0 0 1 1.625-1.1H21a1.75 1.75 0 0 1 1.624 2.4l-3.451 8.629a.75.75 0 0 1-.696.471H2a.75.75 0 0 1-.696-1.029z"
      />
    </svg>
  );
};
export default Folder_02;
