import React from "react";
const CustomField: React.FC<
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
        d="M1.25 4.25h21.5v15.5H1.25zM16 6.586 19.414 10 18 11.414l-2-2-2 2L12.586 10zm-2 6 2 2 2-2L19.414 14 16 17.414 12.586 14zM11 11H5v2h6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CustomField;
