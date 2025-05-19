import React from "react";
const UserCheck_01: React.FC<
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
        d="M21.426 13.013a1 1 0 0 1 .061 1.413l-5.5 6a1 1 0 0 1-1.444.031l-2.5-2.5a1 1 0 0 1 1.414-1.414l1.762 1.761 4.794-5.23a1 1 0 0 1 1.413-.061"
      />
      <path
        fill="currentColor"
        d="m12.068 19.75-.909-.909a2.25 2.25 0 1 1 3.182-3.182l.838.838 1.425-1.554a7.76 7.76 0 0 0-4.85-3.493A5.252 5.252 0 0 0 10 1.25a5.25 5.25 0 0 0-1.755 10.2A7.75 7.75 0 0 0 2.25 19c0 .414.336.75.75.75z"
      />
    </svg>
  );
};
export default UserCheck_01;
