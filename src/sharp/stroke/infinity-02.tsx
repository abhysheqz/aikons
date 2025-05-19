import React from "react";
const Infinity_02: React.FC<
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
        d="M12 12s-1.643 3-3.3 3S6 13.657 6 12s1.043-3 2.7-3 3.3 3 3.3 3Zm0 0s1.643 3 3.3 3 2.7-1.343 2.7-3-1.043-3-2.7-3-3.3 3-3.3 3ZM18 3h4v18h-4M6 21H2V3h4"
      />
    </svg>
  );
};
export default Infinity_02;
