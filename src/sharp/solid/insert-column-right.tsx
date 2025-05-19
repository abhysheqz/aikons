import React from "react";
const InsertColumnRight: React.FC<
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
        d="M17.836 7.586 22.25 12l-4.414 4.414L16.422 15l2-2h-6.586v-2h6.586l-2-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M2.5 2.25h5.25v6h-6V3a.75.75 0 0 1 .75-.75M1.75 14.25v-4.5h6v4.5zM1.75 15.75V21c0 .414.336.75.75.75h5.25v-6zM9.25 2.25v19.5H20.5a.75.75 0 0 0 .75-.75v-6.232l-3.414 3.414L14.654 15l.75-.75h-4.818v-4.5h4.818l-.75-.75 3.182-3.182 3.414 3.414V3a.75.75 0 0 0-.75-.75z"
      />
    </svg>
  );
};
export default InsertColumnRight;
