import React from "react";
const StructureAdd: React.FC<
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
        d="M16 1.25A1.75 1.75 0 0 0 14.25 3v4c0 .966.784 1.75 1.75 1.75h5A1.75 1.75 0 0 0 22.75 7V3A1.75 1.75 0 0 0 21 1.25zm0 14A1.75 1.75 0 0 0 14.25 17v4c0 .966.784 1.75 1.75 1.75h5A1.75 1.75 0 0 0 22.75 21v-4A1.75 1.75 0 0 0 21 15.25zM6 6.337a5.752 5.752 0 0 0 0 11.326V18a3 3 0 0 0 3 3h3a1 1 0 1 0 0-2H9a1 1 0 0 1-1-1v-.337A5.752 5.752 0 0 0 8 6.337V6a1 1 0 0 1 1-1h2.995a1 1 0 0 0 0-2H9a3 3 0 0 0-3 3zM7.75 10a.75.75 0 0 0-1.5 0v1.25H5a.75.75 0 0 0 0 1.5h1.25V14a.75.75 0 0 0 1.5 0v-1.25H9a.75.75 0 0 0 0-1.5H7.75z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StructureAdd;
