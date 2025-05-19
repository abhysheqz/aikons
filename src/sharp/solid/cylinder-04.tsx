import React from "react";
const Cylinder_04: React.FC<
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
        fillRule="evenodd"
        d="M12 17.125a1.875 1.875 0 0 0-1.812 2.36l1.15-1.148 1.325 1.326-1.149 1.149A1.88 1.88 0 0 0 13.875 19c0-1.035-.84-1.875-1.875-1.875M8.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.47 1.47A.75.75 0 0 1 3 1.25h18a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75V2a.75.75 0 0 1 .22-.53"
      />
    </svg>
  );
};
export default Cylinder_04;
