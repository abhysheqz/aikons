import React from "react";
const Yelp: React.FC<
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
        d="M4.157 9.837a.75.75 0 0 1 .727.022l6.733 4.01-7.307 3.316a.75.75 0 0 1-1.057-.746l.5-5.998a.75.75 0 0 1 .404-.604M16.911 6.93a.75.75 0 0 1 .644.316l3.058 4.324a.75.75 0 0 1-.529 1.178l-7.491.842 3.703-6.292a.75.75 0 0 1 .615-.369M19.656 15.768a.75.75 0 0 1 .43 1.201l-3.063 3.835a.75.75 0 0 1-1.26-.14l-3.11-6.379zM12.906 21.927a.75.75 0 0 1-1.026.769l-5-2.011a.75.75 0 0 1-.223-1.253l5.52-4.984zM12.45 1.4a.75.75 0 0 1 .297.665l-.928 10.743-6.882-7.807a.75.75 0 0 1 .293-1.196l6.5-2.505a.75.75 0 0 1 .72.1"
      />
    </svg>
  );
};
export default Yelp;
