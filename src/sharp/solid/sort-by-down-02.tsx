import React from "react";
const SortByDown_02: React.FC<
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
        d="M13 10H3V8h10zM13 16H3v-2h10zM19 4H3V2h16zM18.293 8v10.172l1.293-1.293 1.415 1.414L17.292 22l-3.707-3.707 1.415-1.414 1.292 1.293V8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SortByDown_02;
