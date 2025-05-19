import React from "react";
const Tag_02: React.FC<
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
        d="M21.043 1.543a1 1 0 1 1 1.414 1.414L21.09 4.324c.156.341.268.713.353 1.081.17.738.252 1.581.287 2.41.069 1.657-.055 3.35-.134 4.216a2.6 2.6 0 0 1-.624 1.46 88.5 88.5 0 0 1-8.159 8.332c-1.347 1.206-3.357 1.219-4.759.133a33 33 0 0 1-6.01-6.01c-1.086-1.402-1.073-3.412.133-4.76a88.5 88.5 0 0 1 8.333-8.158c.406-.35.912-.574 1.46-.624.865-.08 2.558-.203 4.216-.134.828.034 1.671.117 2.409.287.368.084.74.197 1.08.353zm-14.25 12.25a1 1 0 0 0 0 1.414l2 2a1 1 0 1 0 1.414-1.414l-2-2a1 1 0 0 0-1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tag_02;
