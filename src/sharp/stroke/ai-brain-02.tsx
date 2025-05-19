import React from "react";
const AiBrain_02: React.FC<
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
        strokeWidth={1.5}
        d="M12 4.5a2.5 2.5 0 0 0-5 0 3 3 0 0 0-2.567 4.554 3.001 3.001 0 0 0 0 5.893A3 3 0 0 0 7 19.5a2.5 2.5 0 0 0 5-.001"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M12 19.5a2.5 2.5 0 0 0 5 0 3 3 0 0 0 2.567-4.554 3.001 3.001 0 0 0 0-5.893A3 3 0 0 0 17 4.5a2.5 2.5 0 0 0-5 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M15 9H9v6h6z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 15v2m3-2v2m-3-10v2m3-2v2M9 10.5H7m2 3H7m10-3h-2m2 3h-2"
      />
    </svg>
  );
};
export default AiBrain_02;
