import React from "react";
const PackageMoving: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m13 10 9-4-9-4-9 4z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17.5 4-9 4M2 13h4M2 16h4"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M3.995 6v4.505m8.99-.487V22M2 19.003h4.277l6.671 2.975a.1.1 0 0 0 .082 0L22 17.994l-.023-11.987"
      />
    </svg>
  );
};
export default PackageMoving;
