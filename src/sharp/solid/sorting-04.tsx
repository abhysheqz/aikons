import React from "react";
const Sorting_04: React.FC<
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
        d="M21.5 8.5h-10v-2h10zM21.5 12.5h-10v-2h10zM21.5 16.5h-10v-2h10zM21.5 4.5h-10v-2h10zM7.207 2.5v15.172L8.5 16.379l1.414 1.414L6.207 21.5 2.5 17.793l1.414-1.414 1.293 1.293V2.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sorting_04;
