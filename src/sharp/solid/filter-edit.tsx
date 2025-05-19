import React from "react";
const FilterEdit: React.FC<
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
        d="M18.97 6.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-5.72 5.72h-3.56v-3.56z"
      />
      <path
        fill="currentColor"
        d="M2 2.25a.75.75 0 0 0-.75.75v4.351l6.038 5.032.967 8.7a.75.75 0 0 0 1.08.588l4.352-2.176.32-2.245H11.75v-5.682l6.159-6.159a2.25 2.25 0 0 1 2.841-.28V3a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default FilterEdit;
