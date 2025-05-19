import React from "react";
const Avocado: React.FC<
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
        d="M13.302 3.558C13.086 4.008 13 4.598 13 5a1 1 0 1 1-2 0c0-.597.114-1.507.499-2.308C11.894 1.87 12.675 1 14 1a1 1 0 1 1 0 2c-.275 0-.494.131-.698.558"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4.25C9.25 4.25 6.917 6.321 6.917 9c0 1.136-.262 2.328-.88 3.16A6.4 6.4 0 0 0 4.75 16c0 3.783 3.304 6.75 7.25 6.75s7.25-2.967 7.25-6.75c0-1.43-.478-2.754-1.287-3.84-.618-.832-.88-2.024-.88-3.16 0-2.679-2.333-4.75-5.083-4.75m0 8a3.75 3.75 0 1 1 0 7.5.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Avocado;
