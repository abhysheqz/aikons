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
        fillRule="evenodd"
        d="M8.5 3.75a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H13v1.307a8.754 8.754 0 0 1 7.683 7.602c.023.186.224.452.666.732a2.52 2.52 0 0 1 1.132 1.684l.247.994A.75.75 0 0 1 22 18H2a.75.75 0 0 1-.728-.93l.247-.995a2.52 2.52 0 0 1 1.132-1.683c.441-.28.643-.547.666-.733A8.754 8.754 0 0 1 11 6.057V4.75H9.5a1 1 0 0 1-1-1m-7.25 16.5a1 1 0 0 1 1-1h19.5a1 1 0 1 1 0 2H2.25a1 1 0 0 1-1-1M19.447 4.606a1 1 0 0 1 .448 1.341l-.5 1a1 1 0 1 1-1.79-.894l.5-1a1 1 0 0 1 1.342-.447m2.948 2.947a1 1 0 0 1-.447 1.341l-1 .5a1 1 0 1 1-.894-1.788l.999-.5a1 1 0 0 1 1.342.447m-16.5-2.5a1 1 0 0 0-1.79.894l.5 1a1 1 0 1 0 1.79-.894zM2.948 7.106a1 1 0 1 0-.895 1.788l.999.5a1 1 0 1 0 .895-1.788z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default HotelBell;
