import React from "react";
const EditRoad: React.FC<
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
        d="M3.252 3v18M16.252 3v7.5M9.752 3v4M9.752 10v4M9.752 17v4M19.613 13.44l.695.692a1.497 1.497 0 0 1 0 2.121l-3.638 3.696a2 2 0 0 1-1.05.551l-2.254.488a.5.5 0 0 1-.597-.593l.48-2.235c.074-.397.267-.762.553-1.047l3.684-3.674a1.507 1.507 0 0 1 2.127 0"
      />
    </svg>
  );
};
export default EditRoad;
