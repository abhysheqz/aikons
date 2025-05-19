import React from "react";
const Accident: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7.5 20a2 2 0 1 1-4 0m4 0a2 2 0 0 0-4 0m4 0h3v-4.5L7 13m-3.5 7H2m5-7H2m5 0L3.5 8H2M16.5 20a2 2 0 1 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0h-3v-4.5L17 13m3.5 7H22m0-12h-1.5L17 13m5 0h-5M10.01 10 7 7.445l2.195-.619-1.602-3.82 3.338 1.628L12.453 2l1.16 4.177L17 4.983 15.035 10M12.5 10 12 8"
      />
    </svg>
  );
};
export default Accident;
