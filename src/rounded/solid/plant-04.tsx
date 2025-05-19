import React from "react";
const Plant_04: React.FC<
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
        d="M12.975 13.946h1.95c3.77 0 6.825-3.047 6.825-6.806v-.972a.974.974 0 0 0-.975-.972H17.85c-3.768 0-6.823 3.045-6.825 6.802v7.78c0 .537.437.972.975.972a.974.974 0 0 0 .975-.972zM3.225 3.25a.974.974 0 0 0-.975.972v.973C2.25 8.953 5.305 12 9.075 12h.7v-.002c.001-2.133.832-4.07 2.188-5.51A6.83 6.83 0 0 0 6.15 3.25z"
      />
    </svg>
  );
};
export default Plant_04;
