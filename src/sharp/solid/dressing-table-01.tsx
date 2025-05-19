import React from "react";
const DressingTable_01: React.FC<
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
        d="m10.47 4.97 1.06 1.06-2 2-1.06-1.06zm4.06 2.06-4 4-1.06-1.06 4-4z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 3.5a5 5 0 0 0-5 5v6H5v-6a7 7 0 0 1 14 0v6h-2v-6a5 5 0 0 0-5-5"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 15.5v7h2v-2.25h12v2.25h2v-7h1v-2H3v2zm7 2.25h2v-1.5h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DressingTable_01;
