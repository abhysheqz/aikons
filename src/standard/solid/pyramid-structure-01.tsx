import React from "react";
const PyramidStructure_01: React.FC<
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
        d="M12 1.25a.75.75 0 0 1 .656.386l2.777 5a.75.75 0 0 1-.655 1.114H9.222a.75.75 0 0 1-.655-1.114l2.777-5A.75.75 0 0 1 12 1.25M6.9 9.636a.75.75 0 0 1 .656-.386h8.888a.75.75 0 0 1 .656.386l1.667 3a.75.75 0 0 1-.656 1.114H5.89a.75.75 0 0 1-.656-1.114zm-3.333 6a.75.75 0 0 1 .655-.386h15.556a.75.75 0 0 1 .655.386l2.223 4A.75.75 0 0 1 22 20.75H2a.75.75 0 0 1-.656-1.114z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PyramidStructure_01;
