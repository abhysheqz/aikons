import React from "react";
const FilterAdd: React.FC<
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
        fillRule="evenodd"
        d="M16 11V8h2v3h3v2h-3v3h-2v-3h-3v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M3 2.25a.75.75 0 0 0-.75.75v4.351l6.038 5.032.967 8.7a.75.75 0 0 0 1.08.588l4.165-2.082V14.5h-3v-5h3v-3h5v2.726l2.25-1.875V3a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default FilterAdd;
