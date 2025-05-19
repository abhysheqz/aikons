import React from "react";
const CursorLoading_01: React.FC<
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
        d="M12 1.248a.75.75 0 0 0-.75.75v1c0 1.227.589 2.316 1.5 3a3.74 3.74 0 0 0-1.5 3v1c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-1a3.74 3.74 0 0 0-1.5-3 3.74 3.74 0 0 0 1.5-3v-1a.75.75 0 0 0-.75-.75zm5.25 1.75a2.25 2.25 0 0 1-4.5 0v-.25h4.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.82 3.854 7.233 1.566c-.783-.693-2.033-.183-2.09.871L4.25 18.871c-.06 1.124 1.266 1.744 2.095 1.004l3.363-3.004 2.068 5.094c.261.644.994.951 1.635.693l1.878-.755c.643-.259.958-.99.696-1.636l-2.104-5.183 4.775-.634c1.063-.142 1.478-1.468.669-2.184l-.3-.265A2.24 2.24 0 0 1 18 12.25h-6a2.25 2.25 0 0 1-2.25-2.25v-1c0-1.116.349-2.15.941-3a5.2 5.2 0 0 1-.872-2.145"
      />
    </svg>
  );
};
export default CursorLoading_01;
