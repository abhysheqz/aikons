import React from "react";
const EditRoad: React.FC<
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
        d="M17.97 11.47a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-5.5 5.5a.75.75 0 0 1-.53.22H13a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .22-.53zM3 2.5a1 1 0 0 1 1 1v17a1 1 0 1 1-2 0v-17a1 1 0 0 1 1-1M16 2.5a1 1 0 0 1 1 1V10a1 1 0 1 1-2 0V3.5a1 1 0 0 1 1-1M9.5 2.5a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m0 7a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1m0 7a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EditRoad;
