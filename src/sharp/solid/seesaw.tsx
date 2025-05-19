import React from "react";
const Seesaw: React.FC<
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
        d="m18.562 8.263-.301-1.26 1.39-.31-.326-1.443-4.252.947.326 1.443 1.409-.314.301 1.261-10.674 2.378-.302-1.26 1.39-.31-.326-1.444-4.252.947.326 1.444 1.409-.314.301 1.26-3.731.832.39 1.629c.336 1.405 1.773 2.25 3.183 1.935l15.86-3.532c1.417-.316 2.335-1.696 1.996-3.11l-.385-1.61zM9.75 17.25v-1.382l4.5-1.002v2.384h2.5v1.5h-9.5v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Seesaw;
