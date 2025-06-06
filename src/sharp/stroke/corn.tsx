import React from "react";
const Corn: React.FC<
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
        d="M3.885 20.132c2.103 2.078 5.978 1.618 8.655-1.026 3.059-3.021 4.85-3.986 5.96-4.606-3.609-3.565-9.742-1.454-10.393 3.25m-4.222 2.382L2.5 21.5m1.385-1.368c-2.103-2.077-1.638-5.904 1.039-8.548.847-.628 2.921-2.682 3.183-5.084 1.304 1.288 2.5 2.5 2 5.084M17.592 13c2.35-3.624 4.94-8.276 3.487-9.954-1.73-2-7.07 1.892-11.079 5.29"
      />
    </svg>
  );
};
export default Corn;
