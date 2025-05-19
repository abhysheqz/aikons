import React from "react";
const Wifi_02: React.FC<
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
        d="M22 8.214C18.867 5.764 15.456 4.5 12 4.5S5.133 5.764 2 8.214l1.315 1.51C6.126 7.55 9.085 6.5 12 6.5s5.874 1.05 8.685 3.225zM15.041 16.207c-1.609-1.61-4.475-1.61-6.084 0l-1.315-1.51c2.37-2.262 6.344-2.262 8.714 0z"
      />
      <path
        fill="currentColor"
        d="M19.024 11.633 17.71 13.14c-3.32-2.841-7.846-2.87-11.418.004l-1.314-1.51c4.297-3.497 9.938-3.529 14.046-.002M12 17.5a1 1 0 1 0 0 2h.012a1 1 0 1 0 0-2z"
      />
    </svg>
  );
};
export default Wifi_02;
