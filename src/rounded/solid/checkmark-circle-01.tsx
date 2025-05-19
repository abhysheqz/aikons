import React from "react";
const CheckmarkCircle_01: React.FC<
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
        d="M12 22.75C6.063 22.75 1.25 17.937 1.25 12S6.063 1.25 12 1.25 22.75 6.063 22.75 12 17.937 22.75 12 22.75m4.48-13.372a1 1 0 0 0-.96-1.755c-1.828 1-3.34 2.93-4.357 4.487-.376.575-.697 1.12-.954 1.581a9 9 0 0 0-.689-.602 10 10 0 0 0-.71-.512l-.314-.195a1 1 0 0 0-.992 1.737l.21.131c.144.094.344.232.566.408.458.362.951.836 1.262 1.356a1 1 0 0 0 1.768-.098l.098-.206a24.631 24.631 0 0 1 1.43-2.507c.983-1.505 2.27-3.075 3.642-3.825"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CheckmarkCircle_01;
