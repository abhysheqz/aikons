import React from "react";
const Sin: React.FC<
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
        d="M9 7a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-1v8h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1V8h-1a1 1 0 0 1-1-1M16.77 6.027a1 1 0 0 1 1.124.526L21 12.764V7a1 1 0 1 1 2 0v10a1 1 0 0 1-1.894.447L18 11.237V17a1 1 0 1 1-2 0V7a1 1 0 0 1 .77-.973M1 9.325A3.325 3.325 0 0 1 4.325 6h.094c1.375 0 2.595.88 3.03 2.184a1 1 0 1 1-1.898.632A1.19 1.19 0 0 0 4.42 8h-.094C3.593 8 3 8.593 3 9.325V9.5A1.5 1.5 0 0 0 4.5 11 3.5 3.5 0 0 1 8 14.5v.175A3.325 3.325 0 0 1 4.675 18h-.094a3.19 3.19 0 0 1-3.03-2.184 1 1 0 0 1 1.898-.632c.162.487.618.816 1.132.816h.094C5.407 16 6 15.407 6 14.675V14.5A1.5 1.5 0 0 0 4.5 13 3.5 3.5 0 0 1 1 9.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sin;
