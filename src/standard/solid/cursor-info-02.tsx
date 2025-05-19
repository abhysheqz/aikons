import React from "react";
const CursorInfo_02: React.FC<
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
        d="M17.75 14.75c-.553 0-1 .448-1 .997a1 1 0 1 1-2 0 3 3 0 0 1 3-2.997 2.999 2.999 0 0 1 2.045 5.191l-.126.117c-.276.256-.502.464-.68.69-.198.25-.239.4-.239.495a1 1 0 1 1-2 0c0-.733.338-1.316.67-1.736.284-.358.636-.683.901-.928l.11-.102a.999.999 0 0 0-.682-1.727m0 5.99a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0v-.01a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3.33 2.87c-.37-.964.576-1.91 1.54-1.54l15.117 5.815c1.042.4 1.009 1.887-.051 2.24l-6.413 2.138-2.137 6.413c-.353 1.06-1.84 1.093-2.241.05z"
      />
    </svg>
  );
};
export default CursorInfo_02;
