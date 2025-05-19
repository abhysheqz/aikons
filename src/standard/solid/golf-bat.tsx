import React from "react";
const GolfBat: React.FC<
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
        d="M20.332 1.134c-1.352-.476-2.744.33-3.14 1.652L15.28 8.948a1.8 1.8 0 0 0 .253 1.583l-4.013 9.081-3.575-2.93-.036-.029c-.481-.394-.9-.737-1.286-.974-.424-.26-.86-.426-1.381-.429-1.34-.008-2.206.884-2.629 1.858-.415.957-.482 2.137-.165 3.068.333.98.96 1.645 1.739 2.05.758.393 1.627.524 2.458.524h3.022c.494 0 .886 0 1.26-.109a3.2 3.2 0 0 0 1.196-.65 1 1 0 0 0 .792-.588l4.48-10.137a1.94 1.94 0 0 0 1.36-.994l2.952-5.543.01-.02c.678-1.34.08-3.06-1.385-3.575"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GolfBat;
