import React from "react";
const Target_01: React.FC<
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
        d="M12 3a9 9 0 1 0 9 9c0-.942-.145-1.85-.412-2.7a1 1 0 0 1 1.908-.6c.328 1.043.504 2.152.504 3.3 0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1c1.201 0 2.36.193 3.444.55a1 1 0 0 1-.626 1.9A9 9 0 0 0 12 3"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 8a4 4 0 1 0 4 4 1 1 0 1 1 2 0 6 6 0 1 1-6-6 1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 1a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2.586l-6.707 6.707a1 1 0 0 1-1.414-1.414L18 4.586V2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Target_01;
