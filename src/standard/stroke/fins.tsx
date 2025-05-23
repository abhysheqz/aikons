import React from "react";
const Fins: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.471 19.963c2.414-4.127 3.02-12.61 2.156-16.268l-.914.452c-.418.207-.922.096-1.27-.213C7.966 3.509 7.24 3 6.5 3s-1.466.509-1.943.934c-.348.31-.853.42-1.27.213l-.914-.452c-.864 3.658-.258 12.14 2.156 16.268.809 1.383 3.134 1.383 3.942 0M15.529 4.037c-2.414 4.127-3.02 12.61-2.156 16.268l.914-.452c.417-.207.922-.096 1.27.213.477.425 1.203.934 1.943.934s1.466-.509 1.943-.933c.348-.31.852-.42 1.27-.214l.914.452c.864-3.657.258-12.14-2.157-16.268-.808-1.382-3.133-1.383-3.941 0M6.5 17v-1M17.5 8V7"
      />
    </svg>
  );
};
export default Fins;
