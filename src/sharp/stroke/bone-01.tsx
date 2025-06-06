import React from "react";
const Bone_01: React.FC<
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
        strokeWidth={1.5}
        d="M7.355 18.036a3.16 3.16 0 0 1-2.245.923c-1.718 0-3.11-1.341-3.11-2.996 0-1.654 1.392-2.996 3.11-2.996.646 0 1.408.322 1.953.846l6.792-6.86c-.568-.639-.838-.97-.838-1.986 0-1.544 1.36-2.967 2.945-2.967 1.478 0 3.017 1.178 3.017 3.044m0 0C20.696 5.044 22 6.321 22 7.976c0 1.654-1.304 3.06-3.021 3.06-.647 0-1.47-.299-2.015-.823l-6.731 6.836c.568.64.839.97.839 1.987 0 1.544-1.361 2.967-2.946 2.967-1.478 0-3.016-.957-3.016-2.967M18.979 5.044c-.883 0-1.68.354-2.245.923"
      />
    </svg>
  );
};
export default Bone_01;
