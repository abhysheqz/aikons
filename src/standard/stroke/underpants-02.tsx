import React from "react";
const Underpants_02: React.FC<
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
        d="m16 16-2.109-8M8 16l2.109-8M3.5 8h17M18.358 5H5.638a2 2 0 0 0-1.962 1.608l-1.272 6.36a2 2 0 0 0 1.63 2.364l3.538.596a1 1 0 0 1 .666.432l1.164 1.746a2 2 0 0 0 1.662.89l1.858.003a2 2 0 0 0 1.665-.889l1.171-1.751a1 1 0 0 1 .666-.43l3.538-.597a2 2 0 0 0 1.63-2.364l-1.272-6.36A2 2 0 0 0 18.358 5"
      />
    </svg>
  );
};
export default Underpants_02;
