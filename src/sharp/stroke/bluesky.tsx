import React from "react";
const Bluesky: React.FC<
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
        d="M12 11.496C11.894 11.296 7.455 3 3.504 3c-2.168 0-1.5 5-1 7.5.203 1.01 1 4 5.499 3.5 0 0-3.999.5-3.999 3 0 1.5 2.5 4 4.499 4 1.958 0 3.436-4.314 3.497-4.494.06.18 1.54 4.494 3.497 4.494 2 0 4.499-2.5 4.499-4 0-2.5-3.999-3-3.999-3 4.499.5 5.297-2.49 5.499-3.5.5-2.5 1.168-7.5-1-7.5-3.95 0-8.39 8.296-8.496 8.496Z"
      />
    </svg>
  );
};
export default Bluesky;
