import React from "react";
const Seal: React.FC<
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
        d="M11.47 1.47a.75.75 0 0 1 1.06 0l2.78 2.78H19a.75.75 0 0 1 .75.75v3.69l2.78 2.78a.75.75 0 0 1 0 1.06l-2.78 2.78V19a.75.75 0 0 1-.75.75h-3.69l-2.78 2.78a.75.75 0 0 1-1.06 0l-2.78-2.78H5a.75.75 0 0 1-.75-.75v-3.69l-2.78-2.78a.75.75 0 0 1 0-1.06l2.78-2.78V5A.75.75 0 0 1 5 4.25h3.69z"
      />
    </svg>
  );
};
export default Seal;
