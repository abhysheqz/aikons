import React from "react";
const FilterEdit: React.FC<
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
        d="M19.271 6.914a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .707l-5.5 5.5a.5.5 0 0 1-.354.146h-2.5a.5.5 0 0 1-.5-.5v-2.5a.5.5 0 0 1 .146-.353z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.375 4.267c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v1.439a2 2 0 0 0-2.664.147l-5.5 5.5a2 2 0 0 0-.586 1.414v2.5a2 2 0 0 0 2 2h.036l-.23 1.593a1.75 1.75 0 0 1-.949 1.315l-2.238 1.12a1.75 1.75 0 0 1-2.523-1.37l-.797-7.175a.25.25 0 0 0-.088-.164L2.005 8.143a1.75 1.75 0 0 1-.63-1.344z"
      />
    </svg>
  );
};
export default FilterEdit;
