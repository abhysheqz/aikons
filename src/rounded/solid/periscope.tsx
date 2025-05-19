import React from "react";
const Periscope: React.FC<
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
        d="M12 1.25c-4.84 0-8.75 3.96-8.75 8.83 0 2.795 1.114 4.976 3.253 6.87 1.349 1.196 3.01 3.212 4 4.836.314.515.813.964 1.484.964.662 0 1.168-.439 1.498-.945 1.058-1.619 2.672-3.667 4.012-4.855 2.139-1.894 3.253-4.075 3.253-6.87 0-4.87-3.91-8.83-8.75-8.83M16 10a4 4 0 0 1-8 0c0-.112 0-.168.016-.206a.19.19 0 0 1 .19-.12c.041 0 .106.03.235.091a2.5 2.5 0 0 0 3.324-3.324c-.06-.13-.09-.194-.092-.235a.19.19 0 0 1 .121-.19C11.832 6 11.888 6 12 6a4 4 0 0 1 4 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Periscope;
