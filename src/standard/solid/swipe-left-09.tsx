import React from "react";
const SwipeLeft_09: React.FC<
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
        d="M18.383 1.076A1 1 0 0 1 19 2v1.5h3a1 1 0 1 1 0 2h-3V7a1 1 0 0 1-1.707.707l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.09-.217"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m5.784 21.534-4.66-6.942a1.303 1.303 0 0 1 2.03-1.619l2.32 2.468a.45.45 0 0 0 .77-.23L8.39 3.318a1.305 1.305 0 1 1 2.568.466l-1.33 7.298a.45.45 0 0 0 .886.162l.456-2.497a1.284 1.284 0 1 1 2.526.468l-.448 2.385a.45.45 0 1 0 .884.167l.295-1.533a1.268 1.268 0 1 1 2.49.488l-.475 2.379a.45.45 0 1 0 .882.177l.31-1.554a1.269 1.269 0 0 1 2.493.478l-.21 1.142-1.196 7.113a2.75 2.75 0 0 1-2.712 2.294H8.067a2.75 2.75 0 0 1-2.283-1.216"
      />
    </svg>
  );
};
export default SwipeLeft_09;
