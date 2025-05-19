import React from "react";
const Covariate: React.FC<
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
        d="M17.5 9.5h2.009v2H17.5zM13.5 13.5h2.009v2H13.5zM11.5 4.5h2.009v2H11.5zM7.5 8.5h2.009v2H7.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.914 19.5 21.5 3.914 20.086 2.5 4.5 18.086V2.5h-2v18a1 1 0 0 0 1 1h18v-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Covariate;
