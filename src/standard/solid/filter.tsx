import React from "react";
const Filter: React.FC<
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
        d="M2.25 4.267c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75V6.8c0 .52-.23 1.012-.63 1.344l-5.345 4.455a.25.25 0 0 0-.088.156l-.881 6.106a1.75 1.75 0 0 1-.949 1.315l-2.238 1.12a1.75 1.75 0 0 1-2.523-1.37L8.3 12.75a.25.25 0 0 0-.088-.164L2.88 8.143A1.75 1.75 0 0 1 2.25 6.8z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Filter;
