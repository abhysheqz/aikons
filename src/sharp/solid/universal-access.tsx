import React from "react";
const UniversalAccess: React.FC<
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
        d="M12 2.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9.498 9.724C7.935 9.373 6.522 8.698 5.375 7.78L5 7.48l1.234-1.574.39.313C7.983 7.306 9.877 7.999 12 7.999c2.123 0 4.017-.693 5.376-1.78l.39-.313L19 7.48l-.376.3c-1.148.918-2.561 1.593-4.126 1.945v4.692L15.5 21.5h-2l-.849-6h-1.305l-.846 6h-2l.998-7.083z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default UniversalAccess;
