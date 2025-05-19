import React from "react";
const Resize_02: React.FC<
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
        d="M19.206 1.297a1 1 0 0 1 0 1.414l-.293.293h1.583a1 1 0 1 1 0 2h-1.583l.293.293a1 1 0 1 1-1.415 1.414l-1.998-2a1 1 0 0 1 0-1.414l1.998-2a1 1 0 0 1 1.415 0M4.294 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L4.587 5H3a1 1 0 0 1 0-2h1.587l-.293-.293a1 1 0 0 1 0-1.414M9.255 4.75a2.5 2.5 0 1 1 5 0v5.5H18A3.75 3.75 0 0 1 21.75 14v5A3.75 3.75 0 0 1 18 22.75h-6.93a2.75 2.75 0 0 1-2.288-1.224l-3.999-5.995a2.49 2.49 0 0 1 3.576-3.43l.896.768z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Resize_02;
