import React from "react";
const Shellfish: React.FC<
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
        d="M14.546 4.955c.075.31.095.639.049.976l-.822 6.044m.773-7.02c-.632-2.607-4.46-2.607-5.092 0m5.092 0c1.567-1.608 4.38-.007 4.454 2.004m0 0c1 .168 3 1.105 3 3.512 0 2.173-2.607 4.469-5.183 6.294-.582.412-.873.618-1.06.768-.574.46-.937.834-1.38 1.422-.144.19-.293.415-.591.863l-.232.35a1.866 1.866 0 0 1-3.108 0l-.232-.35a19 19 0 0 0-.59-.863 7.2 7.2 0 0 0-1.382-1.422c-.186-.15-.477-.356-1.059-.768C4.607 14.94 2 12.645 2 10.47c0-2.407 2-3.344 3-3.512m14 0c.068 1.84-1.19 4.31-2.302 6.019M9.454 4.955c-.075.31-.094.639-.049.976l.822 6.044m-.773-7.02C7.887 3.347 5.074 4.948 5 6.96m0 0c-.068 1.84 1.19 4.31 2.302 6.019"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18 16-1 5H7l-1-5"
      />
    </svg>
  );
};
export default Shellfish;
