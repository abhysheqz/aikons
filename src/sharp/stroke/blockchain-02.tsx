import React from "react";
const Blockchain_02: React.FC<
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
        d="m12 14 6.71-3.834M12 14l-6.684-3.82M12 14v7.61M12 6l7 4v8l-7 4-7-4v-8zM22 21l-3-2.5M12 2v4M2 21l3-2.5"
      />
    </svg>
  );
};
export default Blockchain_02;
