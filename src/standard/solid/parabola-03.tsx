import React from "react";
const Parabola_03: React.FC<
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
        d="M1 20a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1M3 1a1 1 0 0 1 1 1c0 3.991.973 7.557 2.494 10.09 1.532 2.554 3.51 3.908 5.506 3.908s3.974-1.354 5.506-3.907C19.028 9.557 20 5.99 20 2a1 1 0 1 1 2 0c0 4.292-1.042 8.225-2.779 11.12-1.724 2.874-4.246 4.878-7.221 4.878s-5.497-2.004-7.221-4.878C3.042 10.225 2 6.292 2 2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 23a1 1 0 0 0 1-1V4.414l.793.793a1 1 0 1 0 1.414-1.414l-2.5-2.5a1 1 0 0 0-1.414 0l-2.5 2.5a1 1 0 0 0 1.414 1.414L11 4.414V22a1 1 0 0 0 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Parabola_03;
