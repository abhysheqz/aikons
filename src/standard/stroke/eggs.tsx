import React from "react";
const Eggs: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 4.318c2.246-1.973 5.019-2.983 7.175-1.834 3.357 1.788 3.54 7.917 1.509 12.08-.853 1.749-1.98 2.861-3.242 3.436M15 15.5c0 4.418-2.91 6.5-6.5 6.5S2 19.918 2 15.5 4.786 6 8.5 6s6.5 5.082 6.5 9.5"
      />
    </svg>
  );
};
export default Eggs;
