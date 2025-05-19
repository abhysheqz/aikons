import React from "react";
const MoreOrLess: React.FC<
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
        d="M20 13H4v-2h16zM6.414 6 9 3.414 7.586 2 3.293 6.293A1 1 0 0 0 4 8h16V6zM4 16h16a1 1 0 0 1 .706 1.707L16.413 22 15 20.586 17.585 18H4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoreOrLess;
