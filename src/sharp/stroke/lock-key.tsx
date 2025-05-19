import React from "react";
const LockKey: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.568 9.007V6.53c0-2.566-1.955-4.532-4.4-4.532S5.576 3.965 5.576 6.531l-.12 2.476m12.616 1.995V9.008H2.001V22h6.001"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M14.881 18.204c-.446-.415-.944-.643-1.611-.643-1.23 0-2.226.994-2.226 2.22S12.04 22 13.27 22s2.226-.994 2.226-2.22c0-.56-.271-1.187-.615-1.577Zm0 0 2.381-2.353m4.738.038-2.286-2.32a.1.1 0 0 0-.142-.001l-2.31 2.283m0 0 1.564 1.579"
      />
    </svg>
  );
};
export default LockKey;
