import React from "react";
const Hold_05: React.FC<
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
        d="M12.46 5.71a1.5 1.5 0 1 0-2.954-.522l-1.389 7.879-.203 1.345-2.025-2.075a1.692 1.692 0 0 0-2.55 2.212l3.013 4.018c.684.912 1.026 1.367 1.437 1.722a5 5 0 0 0 2.19 1.094c.53.117 1.1.117 2.24.117h2.34a5 5 0 0 0 4.914-4.08l1.07-5.716.434-2.462a1.5 1.5 0 0 0-2.955-.521m-5.561-3.012.347-1.97a1.5 1.5 0 1 1 2.954.522l-.347 1.97m-2.954-.522-.782 4.432m3.736-3.91-.781 4.431m.781-4.432a1.5 1.5 0 0 1 2.955.521l-.348 1.97m0 0-.434 2.462"
      />
    </svg>
  );
};
export default Hold_05;
