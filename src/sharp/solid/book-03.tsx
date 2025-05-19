import React from "react";
const Book_03: React.FC<
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
        d="M6.643 1.25a3.9 3.9 0 0 0-3.895 3.908v13.683a3.9 3.9 0 0 0 3.895 3.909h14.605V7.114h-2.923V5.159a.975.975 0 0 0-.973-.977H6.642v1.954h9.736v.978H6.643A1.95 1.95 0 0 1 4.695 5.16v-.002a1.95 1.95 0 0 1 1.948-1.953h14.605V1.25zm6.028 10.415a.75.75 0 0 0-1.341 0l-3.336 6.67 1.342.671 1.128-2.256h3.073l1.128 2.256 1.342-.67zm-.67 2.012.786 1.573h-1.573z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Book_03;
