import React from "react";
const Halal: React.FC<
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
      viewBox="0 0 25 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.522 13.534v1.504h-2.505m2.505-1.504h4.51l-2.005-2.508m-2.505 2.508v-.502m0 0V9.021m0 4.011-2.505-3.008M9.013 9.02v6.017H7.009"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.524 4.504-2.94-2.453a.1.1 0 0 0-.128 0L9.518 4.51H5.109a.1.1 0 0 0-.1.1v4.408l-2.463 2.938a.1.1 0 0 0 0 .129l2.463 2.94v4.414a.1.1 0 0 0 .1.1l4.42.02 2.927 2.449a.1.1 0 0 0 .129 0l2.945-2.45h4.404a.1.1 0 0 0 .1-.1v-4.42l2.461-2.938a.1.1 0 0 0 0-.13l-2.46-2.954V4.604a.1.1 0 0 0-.1-.1z"
      />
    </svg>
  );
};
export default Halal;
