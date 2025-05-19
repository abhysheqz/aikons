import React from "react";
const HotelBell: React.FC<
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
        d="M3.273 14.107a8.75 8.75 0 0 1 17.454 0 2.52 2.52 0 0 1 1.754 1.968l.247.994A.75.75 0 0 1 22 18H2a.75.75 0 0 1-.728-.93l.247-.995c.171-.952.864-1.7 1.754-1.968"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.5 2.75a1 1 0 0 0 0 2H11v2a1 1 0 1 0 2 0v-2h1.5a1 1 0 1 0 0-2zm-7.25 16.5a1 1 0 1 0 0 2h19.5a1 1 0 1 0 0-2zM19.447 4.606a1 1 0 0 1 .448 1.341l-.5 1a1 1 0 1 1-1.79-.894l.5-1a1 1 0 0 1 1.342-.447m2.948 2.947a1 1 0 0 1-.447 1.341l-1 .5a1 1 0 1 1-.894-1.788l.999-.5a1 1 0 0 1 1.342.447m-16.5-2.5a1 1 0 0 0-1.79.894l.5 1a1 1 0 1 0 1.79-.894zM2.948 7.106a1 1 0 1 0-.895 1.788l.999.5a1 1 0 1 0 .895-1.788z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HotelBell;
