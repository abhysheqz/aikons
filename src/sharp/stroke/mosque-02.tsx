import React from "react";
const Mosque_02: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10.5 3.656A1.171 1.171 0 1 1 8.843 2M9.5 3.999v1.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.5 21.986v-1.998C7.483 16.99 10 15.99 10 15.99s2.517 1 2.5 3.998v1.998"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M16.951 6.99c-.273-.568-.732-1.38-.205-2.676.351-.863 1.666-1.723 2.254-2.326.558.567 1.953 1.55 2.269 2.326.527 1.295.055 2.117-.21 2.677m-4.108 0-.464 5.993m.464-5.993h4.109m0 0 .943 14.991H17.49m-1.004-8.998H2.604a.1.1 0 0 0-.1.1v8.898H17.49m-1.004-8.998h.905a.1.1 0 0 1 .1.1v8.898"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M6.894 7.758c.408-.36 1.963-1.214 2.594-1.76.535.472 2.277 1.447 2.587 1.743.31.295 3.306 2.033 1.135 5.269H5.752c-2.011-3.272.63-4.8 1.142-5.252Z"
      />
    </svg>
  );
};
export default Mosque_02;
