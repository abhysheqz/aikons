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
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13.308 17.007-.3 2.011-3.891 1.968a.1.1 0 0 1-.146-.078l-.956-8.925-6.015-5v-3.88a.1.1 0 0 1 .1-.1h17.823a.1.1 0 0 1 .1.1v1.933"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m19.456 7.069-5.453 5.442v2.533h2.476l5.492-5.467a.1.1 0 0 0 0-.142L19.597 7.07a.1.1 0 0 0-.142 0Z"
      />
    </svg>
  );
};
export default FilterEdit;
