import React from "react";
const Glove: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14.871 2.25c-3.945 0-7.137 3.214-7.137 7.17v2.32l-.175-.235a2.665 2.665 0 0 0-4.191-.108 2.69 2.69 0 0 0-.15 3.232l4.052 5.923a2.75 2.75 0 0 0 2.27 1.198h8.278a2.75 2.75 0 0 0 2.71-2.278L20.784 18H12.5a1 1 0 1 1 0-2h8.633l1.023-5.871v-.006c.742-4.47-2.982-7.873-7.285-7.873"
      />
    </svg>
  );
};
export default Glove;
