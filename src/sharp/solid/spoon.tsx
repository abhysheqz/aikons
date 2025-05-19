import React from "react";
const Spoon: React.FC<
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
        d="M14.442 12.742q-.264.015-.449.021L5.307 22.01a2.347 2.347 0 1 1-3.317-3.317l9.247-8.686q.005-.184.021-.45c.028-.469.085-1.116.2-1.822.113-.704.287-1.485.555-2.215.265-.723.64-1.446 1.184-1.99 1.08-1.08 2.635-1.866 4.16-2.156 1.504-.287 3.17-.118 4.278.99 1.109 1.11 1.278 2.775.991 4.28-.29 1.524-1.076 3.08-2.155 4.159-.545.544-1.268.92-1.991 1.184-.73.268-1.51.442-2.215.556-.706.114-1.353.17-1.823.199"
      />
    </svg>
  );
};
export default Spoon;
