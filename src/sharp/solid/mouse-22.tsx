import React from "react";
const Mouse_22: React.FC<
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
        fill="currentColor"
        d="M12.75 1.25v3.981h.75a.75.75 0 0 1 .75.751v5.005a.75.75 0 0 1-.75.751h-3a.75.75 0 0 1-.75-.75V5.981a.75.75 0 0 1 .75-.75h.75V1.25c-2.808.179-4.71 1.375-5.887 3.276C4.125 6.524 3.75 9.201 3.75 11.99c0 2.787.375 5.464 1.613 7.462 1.28 2.065 3.414 3.3 6.637 3.3s5.357-1.235 6.637-3.3c1.238-1.998 1.613-4.675 1.613-7.462s-.375-5.465-1.613-7.463c-1.178-1.9-3.08-3.097-5.887-3.276"
      />
      <path fill="currentColor" d="M11.25 6.733v3.504h1.5V6.733z" />
    </svg>
  );
};
export default Mouse_22;
