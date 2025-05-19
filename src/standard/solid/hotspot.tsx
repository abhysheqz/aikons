import React from "react";
const Hotspot: React.FC<
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
        d="M9.25 14a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 5a9 9 0 0 0-9 9c0 2.028.67 3.896 1.8 5.4a1 1 0 0 1-1.6 1.202A10.96 10.96 0 0 1 1 14C1 7.925 5.925 3 12 3s11 4.925 11 11c0 2.476-.819 4.763-2.2 6.602a1 1 0 0 1-1.6-1.202A8.96 8.96 0 0 0 21 14a9 9 0 0 0-9-9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 9a5 5 0 0 0-3.727 8.333 1 1 0 1 1-1.49 1.334 7 7 0 1 1 10.435 0 1 1 0 1 1-1.49-1.334A5 5 0 0 0 12 9"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hotspot;
