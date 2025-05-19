import React from "react";
const LicenseNo: React.FC<
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
        d="M21.25 4v13.714L4.86 1.324q.31-.073.64-.074h13A2.75 2.75 0 0 1 21.25 4M2.75 4c0-.37.073-.723.206-1.045L11 11H8.5a1 1 0 1 0 0 2H12a1 1 0 0 0 .707-.293L16 16H8.5a1 1 0 1 0 0 2h8a1 1 0 0 0 .912-.588l3.633 3.633A2.75 2.75 0 0 1 18.5 22.75h-13A2.75 2.75 0 0 1 2.75 20z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LicenseNo;
