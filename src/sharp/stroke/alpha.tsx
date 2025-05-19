import React from "react";
const Alpha: React.FC<
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
        strokeWidth={1.5}
        d="M17.44 4.009c.205 2.573-.204 6.595-1.46 9.962m0 0c-1.214 3.256-3.22 5.898-6.231 6.024-3.8 0-6.864-3.82-6.697-8.04-.167-3.371 2.121-7.824 6.454-7.946 4.127.188 5.609 3.959 6.366 9.252q.052.36.109.71Zm0 0c.273 1.681.633 3.142 1.077 4.175 1.043 2.422 3.986 2.516 3.986.084"
      />
    </svg>
  );
};
export default Alpha;
