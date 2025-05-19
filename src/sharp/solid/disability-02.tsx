import React from "react";
const Disability_02: React.FC<
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
        d="M11.75 4a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.75 15.458c0-1 .187-1.974.587-2.867l1.826.818c-.273.608-.413 1.298-.413 2.049 0 2.78 2.265 5.042 5.07 5.042a5.07 5.07 0 0 0 4.12-2.104l1.62 1.172a7.07 7.07 0 0 1-5.74 2.932c-3.9 0-7.07-3.149-7.07-7.042"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m10.862 10.222-1.053 2.941a1 1 0 0 0 .941 1.337h4.925l2.847 5.504 1.728-1.008-3.137-6a1 1 0 0 0-.863-.496h-4.08l1.67-4.663-1.883-.674-.42 1.175-1.916-.766a1 1 0 0 0-1.29.534l-1.5 3.5 1.837.788 1.116-2.603z"
      />
    </svg>
  );
};
export default Disability_02;
