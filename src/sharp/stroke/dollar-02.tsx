import React from "react";
const Dollar_02: React.FC<
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
        d="M18.417 8.148C18.417 5.858 15.544 4 12 4S5.583 5.857 5.583 8.148s1.75 3.556 6.417 3.556 7 1.185 7 4.148S15.866 20 12 20s-7-1.857-7-4.148M12 2v20"
      />
    </svg>
  );
};
export default Dollar_02;
