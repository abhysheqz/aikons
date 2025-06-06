import React from "react";
const BlushBrush_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m6.087 3.993.331.896a3 3 0 0 0 1.773 1.773l.896.331-.896.332a3 3 0 0 0-1.773 1.772l-.331.896-.332-.896a3 3 0 0 0-1.772-1.772l-.896-.332.896-.331a3 3 0 0 0 1.772-1.773z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15.039 14.994c-.601 4.866-3.608 6.75-4.98 7.008-2.631-.348-4.351-1.637-5.429-3.14m10.409-3.868-3.021-2.017m3.02 2.017 2.559-5m-5.58 2.983c-4.06 2.733-7.359 1.66-8.873.9a.098.098 0 0 0-.143.084c-.02 1.21.432 3.229 1.63 4.9m7.387-5.884 3.006-4.594m0 0 3.834-5.86c.331-.5.986-.669 1.516-.39.571.3.792 1.008.492 1.58l-3.27 6.28m-2.572-1.61 2.573 1.61M4.63 18.861c2.092.623 4.767-.397 5.542-.91"
      />
    </svg>
  );
};
export default BlushBrush_02;
