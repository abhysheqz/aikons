import React from "react";
const Timer_02: React.FC<
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
        d="M4.677 3.945a1 1 0 0 1 1.387-.277l1.5 1a1 1 0 0 1-1.11 1.664l-1.5-1a1 1 0 0 1-.277-1.387m15.664 0a1 1 0 0 1-.277 1.387l-1.5 1a1 1 0 0 1-1.11-1.664l1.5-1a1 1 0 0 1 1.387.277"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.992 5.315c-4.012 0-7.23 2.775-7.716 6.729A1 1 0 1 1 3.29 11.8c.606-4.925 4.647-8.485 9.701-8.485 5.473 0 10 4.22 10 9.732 0 5.51-4.399 9.953-9.872 9.953H2.009a1 1 0 1 1 0-2h11.11c4.346 0 7.873-3.523 7.873-7.953s-3.655-7.732-8-7.732"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.509 2a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-1.5v1a1 1 0 1 1-2 0V3h-1.5a1 1 0 0 1-1-1M17.216 8.293a1 1 0 0 1 0 1.414l-2.38 2.38a2.5 2.5 0 1 1-1.414-1.414l2.38-2.38a1 1 0 0 1 1.414 0M1.009 15a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1M1.009 18.5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Timer_02;
