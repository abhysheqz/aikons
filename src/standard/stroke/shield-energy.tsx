import React from "react";
const ShieldEnergy: React.FC<
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
        d="m8 12 5-6v5h3l-5 6v-5z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3.43 4.934c3.14.226 5.163-2.933 8.597-2.933 3.382-.067 5.037 2.976 8.504 2.976 1.858 9.407-2.008 15.316-8.476 17.023-5.995-1.417-10.5-7.387-8.624-17.066Z"
      />
    </svg>
  );
};
export default ShieldEnergy;
