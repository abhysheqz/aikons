import React from "react";
const StructureCheck: React.FC<
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
        d="M22 22v-6h-7v6zM22 8V2h-7v6z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.994 6.645V4.108a.1.1 0 0 1 .1-.1h4.933M7 17.355v2.536a.1.1 0 0 0 .1.1h4.932M4.811 11.694l1.64 1.443 2.57-3.13M12 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
    </svg>
  );
};
export default StructureCheck;
