import React from "react";
const Folder_02: React.FC<
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
        d="M8.044 2.25H1.25v19.5h16.82l4.68-11.7h-2.975V5.175h-9.293zM3.2 4.2v9.931l1.225-4.082h13.4V7.124H9.568L7.13 4.2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Folder_02;
