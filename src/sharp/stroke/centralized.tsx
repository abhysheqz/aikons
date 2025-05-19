import React from "react";
const Centralized: React.FC<
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
        d="M12 7.001a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM21.5 2.5l-3.624 3.624M17.5 2.5v4h4M2.5 2.5l3.73 3.73M2.5 6.5h4v-4M2.5 21.501l3.705-3.705M6.5 21.5l.001-4h-4M21.5 21.5l-3.765-3.765M21.5 17.5h-4v4"
      />
    </svg>
  );
};
export default Centralized;
