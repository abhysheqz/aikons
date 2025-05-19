import React from "react";
const Pentagon: React.FC<
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
        d="M11.532 1.414a.75.75 0 0 1 .937 0l9.999 8a.75.75 0 0 1 .243.823l-3.998 12a.75.75 0 0 1-.711.513h-12a.75.75 0 0 1-.712-.513l-4-12a.75.75 0 0 1 .243-.823z"
      />
    </svg>
  );
};
export default Pentagon;
