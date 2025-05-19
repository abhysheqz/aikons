import React from "react";
const Treadmill_02: React.FC<
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
        d="M22.75 15.804c0-3.88-3.834-6.596-7.428-5.169L2.564 15.702a2.1 2.1 0 0 0-1.314 1.952c0 1.144.912 2.098 2.07 2.098h15.548c2.159 0 3.882-1.783 3.882-3.948M18 13.75a1.25 1.25 0 1 0 0 2.5h.009a1.25 1.25 0 0 0 0-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.364 9.931A1 1 0 0 0 5 8H2a1 1 0 1 0 0 2h1.28l1.771 5.316a1 1 0 0 0 1.898-.632zM22.243 2.03a1 1 0 0 1 .727 1.213c-.244.977-.723 1.733-1.504 2.205-.526.317-1.123.463-1.735.52l-1.782 5.348a1 1 0 1 1-1.898-.632l2-6a1 1 0 0 1 .95-.684c.733 0 1.164-.103 1.432-.265.222-.134.447-.378.597-.978a1 1 0 0 1 1.213-.727M6.447 18.106a1 1 0 0 1 .447 1.341l-1 2a1 1 0 1 1-1.789-.894l1-2a1 1 0 0 1 1.342-.447M18 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Treadmill_02;
