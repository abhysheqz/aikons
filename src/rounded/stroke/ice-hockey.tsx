import React from "react";
const IceHockey: React.FC<
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
        d="M14.634 16.517 22 3m-4.453 0-5.173 9.787c-.635 1.2-1.028 1.362-2.34.962-1.673-.51-5.02-2.28-6.686-1.507-1.667.774-1.808 5.936-.31 6.994 1.678 1.185 6.649.758 8.758.274"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m8 13-2 7"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 19c0-1.655.345-2 2-2h4c1.655 0 2 .345 2 2s-.345 2-2 2h-4c-1.655 0-2-.345-2-2"
      />
    </svg>
  );
};
export default IceHockey;
