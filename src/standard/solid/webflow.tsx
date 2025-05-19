import React from "react";
const Webflow: React.FC<
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
        d="M6.416 11.5H2a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v4.084L9.858 5.76a.5.5 0 0 1 .439-.26l3.705-.001a.5.5 0 0 1 .498.545l-.426 4.689 2.478-4.958A.5.5 0 0 1 17 5.5h5a.5.5 0 0 1 .447.724l-6 12a.5.5 0 0 1-.448.276h-5a.5.5 0 0 1-.447-.724l2.82-5.637C10.85 15.948 6.593 18.329 2 18.492A.487.487 0 0 1 1.5 18v-4.09a.51.51 0 0 1 .401-.495c1.903-.43 3.487-1.147 4.515-1.915"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Webflow;
