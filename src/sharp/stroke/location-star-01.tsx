import React from "react";
const LocationStar_01: React.FC<
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
        d="M21 11c0 7-9 11-9 11s-9-4-9-11a9 9 0 0 1 18 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.924 6.077c.04-.058.053-.114.093-.057l1.38 2.382 2.549.614c.07.019.045.05 0 .105l-1.758 1.883.67 2.938.003.016c.002.063-.015.05-.08.027l-2.79-1.191-2.755 1.16c-.064.024-.112.068-.113.009q0-.01.002-.017l.665-2.942-1.754-1.886c-.045-.056-.038-.078.032-.097l2.52-.621z"
      />
    </svg>
  );
};
export default LocationStar_01;
