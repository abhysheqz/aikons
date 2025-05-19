import React from "react";
const StarHalf: React.FC<
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
        d="M12.197 1.27c.454.094.78.494.78.958V18.45L5.13 22.635a.977.977 0 0 1-1.387-1.17l2.263-6.787-4.502-4.952a.977.977 0 0 1 .723-1.635h6.197l2.678-6.248a.98.98 0 0 1 1.095-.573M15.411 7.706l.165.385h6.197a.977.977 0 0 1 .723 1.635l-4.502 4.951 2.263 6.787a.977.977 0 0 1-1.387 1.171l-4.37-2.33v-1.963h.473l2.655 1.416-1.85-5.548 3.786-4.164H14.5v-2.34z"
      />
    </svg>
  );
};
export default StarHalf;
