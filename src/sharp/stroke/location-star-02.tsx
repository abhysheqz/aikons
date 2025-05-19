import React from "react";
const LocationStar_02: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 2c-4.418 0-8 3.618-8 8.08 0 2.553 1 4.537 3 6.309 1.41 1.25 3.975 3.929 5 5.61 1.077-1.648 3.59-4.36 5-5.61 2-1.772 3-3.756 3-6.308C20 5.618 16.418 2 12 2Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M11.934 6.08c.04-.058.052-.115.092-.057l1.382 2.382 2.548.614c.07.019.045.049 0 .105l-1.758 1.883.67 2.938.002.016c.003.063-.014.05-.079.027l-2.79-1.192-2.755 1.161c-.064.024-.113.068-.113.009q0-.01.002-.017l.665-2.942-1.754-1.886c-.045-.056-.038-.078.031-.098l2.522-.62z"
      />
    </svg>
  );
};
export default LocationStar_02;
