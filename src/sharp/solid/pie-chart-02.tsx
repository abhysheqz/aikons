import React from "react";
const PieChart_02: React.FC<
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
        d="M12.5 1.25h-.75v11h11v-.75c0-5.66-4.59-10.25-10.25-10.25M1.25 13c0-5.147 3.971-9.366 9.013-9.75v19.5C5.221 22.366 1.25 18.147 1.25 13m19.5.752c-.365 4.801-4.19 8.633-8.985 8.998v-8.998z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PieChart_02;
