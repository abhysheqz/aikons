import React from "react";
const RotateRight_02: React.FC<
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
        d="M15.645.75v5h-4.5v-2h1.193a5.17 5.17 0 0 0-3.58-.95c-1.863.193-3.696 1.358-4.72 3.398l-1.787-.897c1.325-2.64 3.747-4.226 6.3-4.49a7.17 7.17 0 0 1 5.094 1.417V.75z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M18.105 6.029a2.443 2.443 0 0 1 3.316.882 2.4 2.4 0 0 1-.891 3.3l-3.81 2.174.805 2.08.009.022c.334.84.599 1.506.777 2.055.18.558.29 1.052.282 1.548-.023 1.427-.556 2.863-2.074 3.73-.908.518-1.691.675-3.217.982l-.392.079-.032.006-3.215.363-5.499-7.143 2.782-8.565.008-.019a2.424 2.424 0 0 1 2.624-1.515 2.405 2.405 0 0 1 2.017 2.819L11.4 9.855z"
      />
    </svg>
  );
};
export default RotateRight_02;
