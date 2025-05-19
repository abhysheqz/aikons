import React from "react";
const Star: React.FC<
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
        d="M12 1.75a.75.75 0 0 1 .7.483l2.359 6.18 6.478.316a.75.75 0 0 1 .458 1.313l-4.93 4.328 1.812 6.94a.75.75 0 0 1-1.15.808L12 18.188l-5.727 3.93a.75.75 0 0 1-1.15-.807l1.812-6.941-4.93-4.328a.75.75 0 0 1 .458-1.313l6.478-.317 2.358-6.18A.75.75 0 0 1 12 1.75"
      />
    </svg>
  );
};
export default Star;
