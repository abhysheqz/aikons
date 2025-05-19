import React from "react";
const Sunrise: React.FC<
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
        d="M13.006 9.5a1 1 0 0 1-2 0v-3h-.594c-.176 0-.392 0-.568-.022H9.84c-.127-.016-.703-.088-.977-.653-.275-.567.027-1.067.092-1.176l.34-.468c.294-.376.7-.89 1.08-1.281.19-.195.407-.397.638-.556.205-.14.555-.344.986-.344s.78.203.986.344c.231.16.448.36.638.556.38.39.786.905 1.08 1.28l.34.47c.065.108.367.608.092 1.175-.274.565-.85.637-.976.653h-.004a5 5 0 0 1-.568.022h-.582z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.07 9.93a1 1 0 0 1 0 1.414l-1.06 1.06a1 1 0 0 1-1.415-1.414l1.061-1.06a1 1 0 0 1 1.414 0m-14.14 0a1 1 0 0 1 1.414 0l1.06 1.06a1 1 0 1 1-1.414 1.415l-1.06-1.06a1 1 0 0 1 0-1.415M2 17a1 1 0 0 1 1-1h1.5a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m16.5 0a1 1 0 0 1 1-1H21a1 1 0 1 1 0 2h-1.5a1 1 0 0 1-1-1M22 21a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h18a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 17a5 5 0 0 1 10 0 1 1 0 0 1-1 1H8a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default Sunrise;
