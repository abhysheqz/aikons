import React from "react";
const CheckmarkBadge_04: React.FC<
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
        d="M12.53 1.47a.75.75 0 0 0-1.06 0L8.69 4.25H5a.75.75 0 0 0-.75.75v3.69l-2.78 2.78a.75.75 0 0 0 0 1.06l2.78 2.78V19c0 .414.336.75.75.75h3.69l2.78 2.78a.75.75 0 0 0 1.06 0l2.78-2.78H19a.75.75 0 0 0 .75-.75v-3.69l2.78-2.78a.75.75 0 0 0 0-1.06l-2.78-2.78V5.883l-7.712 8.568-4.245-4.245 1.414-1.414 2.755 2.755L18.53 4.25h-3.22z"
      />
    </svg>
  );
};
export default CheckmarkBadge_04;
