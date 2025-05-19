import React from "react";
const SortByUp_02: React.FC<
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
        d="M13 14H3v2h10zM13 8H3v2h10zM19 20H3v2h16zM18.293 15.414V5.828l1.293 1.293L21 5.707 17.293 2l-3.707 3.707L15 7.121l1.293-1.293v9.586z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SortByUp_02;
