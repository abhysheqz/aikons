import React from "react";
const StructureAdd: React.FC<
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
        d="M22 22v-6h-7v6zM22 8V2h-7v6zM9 12H7m0 0H5m2 0v2m0-2v-2m5 2a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.994 6.645V4.108a.1.1 0 0 1 .1-.1h4.933M7 17.355v2.536a.1.1 0 0 0 .1.1h4.932"
      />
    </svg>
  );
};
export default StructureAdd;
