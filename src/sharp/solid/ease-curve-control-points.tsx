import React from "react";
const EaseCurveControlPoints: React.FC<
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
        d="M16.105 7.19c-1.266 1.384-2.206 3.248-3.21 5.257l-.035.068c-.965 1.93-2.017 4.036-3.49 5.645C7.834 19.838 5.823 21 3 21v-2c2.177 0 3.676-.859 4.895-2.19 1.266-1.383 2.206-3.248 3.21-5.257l.035-.068c.965-1.93 2.017-4.036 3.49-5.645C16.166 4.162 18.177 3 21 3v2c-2.177 0-3.676.859-4.895 2.19"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.17 19a3.001 3.001 0 1 1 0 2H14v-2zM12 21h-2v-2h2zM2 4a3 3 0 0 1 5.83-1H10v2H7.83A3.001 3.001 0 0 1 2 4M14 5h-2V3h2z"
      />
    </svg>
  );
};
export default EaseCurveControlPoints;
