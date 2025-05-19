import React from "react";
const Tulip: React.FC<
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
        d="M12 10.75a1 1 0 0 1 1 1v4.101a6.98 6.98 0 0 1 5-2.101 1 1 0 1 1 0 2 5 5 0 0 0-5 5v1a1 1 0 1 1-2 0v-1a5 5 0 0 0-5-5 1 1 0 1 1 0-2 6.98 6.98 0 0 1 5 2.101V11.75a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7 4.25a5.75 5.75 0 0 1 5 2.909 5.75 5.75 0 0 1 5-2.909.75.75 0 0 1 .75.75v3a5.75 5.75 0 0 1-11.5 0V5A.75.75 0 0 1 7 4.25"
      />
      <path
        fill="currentColor"
        d="M12.276 1.302a.75.75 0 0 0-.55 0s-.334.15-.467.22c-.263.14-.618.35-.976.636-.367.293-.77.691-1.072 1.198 1.067.355 2.02.96 2.79 1.745a7 7 0 0 1 2.789-1.745 4.5 4.5 0 0 0-1.072-1.198 6.3 6.3 0 0 0-.976-.635 10 10 0 0 0-.454-.215z"
      />
    </svg>
  );
};
export default Tulip;
