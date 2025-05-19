import React from "react";
const BurjAlArab: React.FC<
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
        d="M2 22a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.75 2a.75.75 0 0 0-1.5 0v4.95h7.864A12.7 12.7 0 0 0 7.75 3.383zm-3.5 7c0-.41.33-.743.738-.75h12.024A.75.75 0 0 1 17 9.75h-.823a12.9 12.9 0 0 1 1.573 6.194c0 2.34-.62 4.537-1.705 6.429a.75.75 0 0 1-.65.377H7a.75.75 0 0 1-.75-.75v-4.25H11a.75.75 0 0 0 0-1.5H6.25v-2.5H11a.75.75 0 0 0 0-1.5H6.25v-2.5H5A.75.75 0 0 1 4.25 9"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BurjAlArab;
