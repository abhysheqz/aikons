import React from "react";
const MoneySafe: React.FC<
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
        d="M7 19.25v3H5v-3zm12 0v3h-2v-3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 2.5A.75.75 0 0 1 2 1.75h20a.75.75 0 0 1 .75.75v17a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zm16.28 3.97 1.22 1.22v6.62l-1.22 1.22-1.061-1.06.78-.78V8.31l-.78-.78zM8.748 7v1.352a2.8 2.8 0 0 0-1.184.679L6.37 8.349 5.627 9.65l1.184.677a2.74 2.74 0 0 0 0 1.344l-1.184.677.744 1.302 1.194-.682c.327.317.733.553 1.184.679V15h1.5v-1.352a2.8 2.8 0 0 0 1.184-.679l1.194.682.744-1.302-1.184-.677a2.74 2.74 0 0 0 0-1.344l1.184-.677-.744-1.302-1.194.682a2.8 2.8 0 0 0-1.184-.679V7zm-.52 4c0-.683.56-1.25 1.27-1.25s1.27.567 1.27 1.25a1.26 1.26 0 0 1-1.27 1.25A1.26 1.26 0 0 1 8.229 11"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneySafe;
