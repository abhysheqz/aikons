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
        d="M22.168 7.694a10.42 10.42 0 0 0-5.862-5.862c-.594-.235-1.218-.48-1.73-.554a2.3 2.3 0 0 0-1.708.4c-.595.406-.878.955-1.005 1.608-.113.58-.113 1.3-.113 2.122v2.529c0 .808 0 1.49.073 2.032.077.575.249 1.105.676 1.532s.957.599 1.532.676c.543.073 1.224.073 2.032.073h2.529c.821 0 1.543 0 2.122-.113.653-.127 1.202-.41 1.607-1.005a2.3 2.3 0 0 0 .401-1.708c-.074-.512-.32-1.136-.554-1.73M1.25 13c0-5.147 3.971-9.366 9.013-9.75v19.5C5.221 22.366 1.25 18.147 1.25 13m19.5.752c-.365 4.801-4.19 8.633-8.985 8.998v-8.998z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PieChart_02;
