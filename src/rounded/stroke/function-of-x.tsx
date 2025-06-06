import React from "react";
const FunctionOfX: React.FC<
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
        d="M2 18.222c.189.85.57 1.778 1.562 1.778 1.72 0 2.149-1.778 3.438-8s1.719-8 3.438-8c.993 0 1.373.928 1.562 1.778m-7.083 4h5.52M21 12c1.38 3.253 1.285 4.98 0 8M12 12c-1.38 3.253-1.285 4.98 0 8"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M14.29 14c.803-.03 1.262.064 1.533.546.328.67 1.156 2.522 1.36 2.926.124.177.288.432.817.515l.71.013"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M19.003 14c-1.124 0-1.916 1.288-2.444 1.936-.768 1.008-1.632 2.114-2.563 2.064"
      />
    </svg>
  );
};
export default FunctionOfX;
