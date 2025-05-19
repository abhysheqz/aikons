import React from "react";
const StructureFail: React.FC<
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
        d="M16 1.25A1.75 1.75 0 0 0 14.25 3v4c0 .966.784 1.75 1.75 1.75h5A1.75 1.75 0 0 0 22.75 7V3A1.75 1.75 0 0 0 21 1.25zm0 14A1.75 1.75 0 0 0 14.25 17v4c0 .966.784 1.75 1.75 1.75h5A1.75 1.75 0 0 0 22.75 21v-4A1.75 1.75 0 0 0 21 15.25zM6 6.337a5.752 5.752 0 0 0 0 11.326v.332a3 3 0 0 0 3.006 3l2.996-.006a1 1 0 1 0-.004-2l-2.996.006a1 1 0 0 1-1.002-1v-.332A5.752 5.752 0 0 0 8 6.337v-.335a1 1 0 0 1 1.001-1l2.992.004a1 1 0 0 0 .003-2l-2.992-.004a3 3 0 0 0-3.004 3zm.03 3.633a.75.75 0 0 0-1.06 1.06l.97.97-.97.97a.75.75 0 1 0 1.06 1.06l.97-.97.97.97a.75.75 0 0 0 1.06-1.06L8.06 12l.97-.97a.75.75 0 1 0-1.06-1.06l-.97.97z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StructureFail;
