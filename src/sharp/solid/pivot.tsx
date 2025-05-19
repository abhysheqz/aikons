import React from "react";
const Pivot: React.FC<
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
        d="M1.75 1.25h20.5V11.5h-1.952V9.06H9.559v10.738H11v1.952H1.75zm1.952 7.81v10.738h3.905V9.06zm3.905-1.953H3.702V3.202h3.905zm1.952 0h10.739V3.202H9.559z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M17.664 21.336 16.25 22.75l-3.914-3.914 3.914-3.914 1.414 1.414-1.5 1.5h4.086v-4h2v6h-6.086z"
      />
    </svg>
  );
};
export default Pivot;
