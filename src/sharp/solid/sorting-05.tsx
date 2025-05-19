import React from "react";
const Sorting_05: React.FC<
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
        d="M18.5 11h-7V9h7zM16.5 15h-5v-2h5zM14.5 19h-3v-2h3zM21.5 7h-10V5h10zM7.207 13v5.172L8.5 16.879l1.414 1.414L6.207 22 2.5 18.293l1.414-1.414 1.293 1.293V13zM6.207 2l3.707 3.707L8.5 7.121 7.207 5.828V11h-2V5.828L3.914 7.121 2.5 5.707z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sorting_05;
