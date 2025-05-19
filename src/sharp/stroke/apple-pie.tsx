import React from "react";
const ApplePie: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0 0c0-.5.4-1.6 2-2"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16 7c2.111 1.098 3.422 2.808 4 5 1.105 0 2 .906 2 2.01 0 2.332-3.434 2.73-4 .507-.503 1.977-3.497 1.977-4 0-.503 1.977-3.497 1.977-4 0-.503 1.977-3.497 1.977-4 0-.566 2.224-4 1.825-4-.506A2.01 2.01 0 0 1 4 12c.578-2.192 1.889-3.902 4-5"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m14 10 1.5 2M10 10l-1.5 2M4 16l2 6h12l2-6"
      />
    </svg>
  );
};
export default ApplePie;
