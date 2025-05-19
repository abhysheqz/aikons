import React from "react";
const Jumpers: React.FC<
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
        d="M9 2.25a.75.75 0 0 0-.335.08l-4 2a.75.75 0 0 0-.385.46l-3.5 12a.8.8 0 0 0-.03.21v2a.75.75 0 0 0 .568.728l2 .5a.75.75 0 0 0 .806-.312l1-1.5a.8.8 0 0 0 .092-.192l1.034-3.31v3.85c0 .272.063.54.185.783l.618 1.236a1.75 1.75 0 0 0 1.565.967h6.764a1.75 1.75 0 0 0 1.565-.967l.618-1.236a1.75 1.75 0 0 0 .185-.783v-3.85l1.034 3.31a.8.8 0 0 0 .092.192l1 1.5a.75.75 0 0 0 .806.312l2-.5A.75.75 0 0 0 23.25 19v-2a.8.8 0 0 0-.03-.21l-3.5-12a.75.75 0 0 0-.385-.46l-4-2A.75.75 0 0 0 15 2.25zm2.57 5.035L9.45 3.75h5.1l-2.122 3.535a.5.5 0 0 1-.858 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Jumpers;
