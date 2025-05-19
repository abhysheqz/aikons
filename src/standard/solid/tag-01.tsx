import React from "react";
const Tag_01: React.FC<
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
        d="M10.806 2.805A2.75 2.75 0 0 1 12.75 2h9.172a.75.75 0 0 1 .75.75v9.172c0 .729-.29 1.428-.806 1.944l-8 8a2.75 2.75 0 0 1-3.889 0l-7.172-7.171a2.75 2.75 0 0 1 0-3.89zm4.57 4.945a1.544 1.544 0 1 1 3.088 0 1.544 1.544 0 0 1-3.088 0m-6.768 5.316a1 1 0 0 0-1.414 1.414l3 3a1 1 0 1 0 1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Tag_01;
