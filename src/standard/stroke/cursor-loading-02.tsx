import React from "react";
const CursorLoading_02: React.FC<
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
        d="m3.1 2.03 15.118 5.815a.44.44 0 0 1-.02.83L11.64 10.86a.44.44 0 0 0-.28.278L9.175 17.7a.44.44 0 0 1-.83.018L2.53 2.6a.44.44 0 0 1 .57-.57Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18 17.5c1.933 0 3.5-1.511 3.5-3.375V13h-7v1.125c0 1.864 1.567 3.375 3.5 3.375m0 0c1.933 0 3.5 1.511 3.5 3.375V22h-7v-1.125c0-1.864 1.567-3.375 3.5-3.375"
      />
    </svg>
  );
};
export default CursorLoading_02;
