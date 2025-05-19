import React from "react";
const AlAqsaMosque: React.FC<
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
        d="M6 12h12v10H6z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 22v-4a2 2 0 1 0-4 0v4M18 12l2.702 1.013c1.078.405 1.298.722 1.298 1.873V22h-4zM2 14.886c0-1.151.22-1.468 1.298-1.873L6 12v10H2zM16.208 9.5C17.313 6.36 15.144 3 12 3S6.687 6.36 7.792 9.5M12 3V2M8 12v-2m8 2v-2M7 9.5h10"
      />
    </svg>
  );
};
export default AlAqsaMosque;
