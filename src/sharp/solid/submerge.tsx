import React from "react";
const Submerge: React.FC<
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
        d="M6 3V1.5h2V3zm5 0V1.5h2V3zm5 0V1.5h2V3zM6 6V4.5h2V6zm5 0V4.5h2V6zm5 0V4.5h2V6zM6 9V7.5h2V9zm10 0V7.5h2V9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M1.25 21.5v-10h1.955v3.641c1.753.765 3.306-.075 4.817-.808 1.575-.764 3.104-1.411 4.768 0 2.83 2.358 5.362.557 8.006-.32V11.5h1.954v10c0 .552-.437 1-.977 1H2.227a.99.99 0 0 1-.977-1"
      />
      <path
        fill="currentColor"
        d="m7.254 13.316.223-.108c.768-.372 1.731-.828 2.768-.934 1.13-.116 2.263.183 3.35 1.102 1.08.898 2.018.987 3.022.785l.09-.02q.043-.314.043-.641a4.75 4.75 0 0 0-9.496-.184"
      />
    </svg>
  );
};
export default Submerge;
