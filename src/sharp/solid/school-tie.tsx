import React from "react";
const SchoolTie: React.FC<
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
        d="M10.083 6.75 5.25 12.023l3.44 3.44-.585 2.81 4.825 4.288a.75.75 0 0 0 .997 0l4.824-4.289-2.4-11.522zm-.051 2.276-2.706 2.951 1.73 1.73z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10.426 1.25a.75.75 0 0 0-.728.932l.767 3.068h5.921l.767-3.068a.75.75 0 0 0-.727-.932z"
      />
    </svg>
  );
};
export default SchoolTie;
