import React from "react";
const NewTwitter: React.FC<
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
        d="M2.11 2.545A1 1 0 0 1 3 2h5a1 1 0 0 1 .81.415l4.765 6.596 6.718-6.718a1 1 0 1 1 1.414 1.414l-6.946 6.946 7.05 9.762A1 1 0 0 1 21 22h-5a1 1 0 0 1-.81-.415l-4.765-6.596-6.718 6.718a1 1 0 0 1-1.414-1.414l6.946-6.946-7.05-9.762a1 1 0 0 1-.08-1.04"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default NewTwitter;
