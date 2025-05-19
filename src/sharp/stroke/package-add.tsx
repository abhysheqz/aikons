import React from "react";
const PackageAdd: React.FC<
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
        d="M11.004 10 20 6l-8.997-4-8.997 4z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.503 4 6.506 8M5.006 12l2 1"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.002 17.5H22M18.5 21v-7M2.002 6v12.028l8.95 3.95a.1.1 0 0 0 .037.009m0-11.97v11.97m0 0V22m0-.013a.1.1 0 0 0 .045-.009l2.968-1.319m5.988-8.658-.012-5.994"
      />
    </svg>
  );
};
export default PackageAdd;
