import React from "react";
const Departement: React.FC<
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
        d="M12.335 1.33a.75.75 0 0 0-.67 0l-9 4.5a.75.75 0 0 0-.415.67V22c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V6.5a.75.75 0 0 0-.415-.67zM10 8H7v2h3zm7 0h-3v2h3zm-7 4H7v2h3zm7 0h-3v2h3zm-7 4H7v2h3zm7 0h-3v2h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Departement;
