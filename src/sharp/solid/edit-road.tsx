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
        d="M18.22 11.72a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06L16.06 21H12.5v-3.56z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 21V3h2v18zM15 10.5V3h2v7.5zM8.5 7V3h2v4zM8.5 14v-4h2v4zM8.5 21v-4h2v4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EditRoad;
