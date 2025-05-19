import React from "react";
const Briefcase_07: React.FC<
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
        d="M20.5 15v6.5h-17V15M15.5 6V2.5h-7V6M12 15v2.5"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.49 6.106H2.51a.01.01 0 0 0-.01.01v4.207c2.803 6.778 17.206 5.67 19 0V6.116a.01.01 0 0 0-.01-.01Z"
      />
    </svg>
  );
};
export default Briefcase_07;
