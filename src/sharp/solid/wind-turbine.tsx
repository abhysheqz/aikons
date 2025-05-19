import React from "react";
const WindTurbine: React.FC<
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
        d="M9.75 11.25a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.497 4.572a8.18 8.18 0 0 0-3.499 6.239l-1.996-.122q.02-.32.058-.633a10.18 10.18 0 0 1 4.299-7.128zM19.955 10.3a8.18 8.18 0 0 0-3.452-5.728l1.138-1.644a10.18 10.18 0 0 1 4.357 7.761l-1.996.122a8 8 0 0 0-.047-.511M13 7.25v2.5h-2v-2.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M9.444 1.747A.75.75 0 0 1 10 1.5h4a.75.75 0 0 1 .746.825l-.5 5A.75.75 0 0 1 13.5 8h-3a.75.75 0 0 1-.746-.675l-.5-5a.75.75 0 0 1 .19-.578M15.83 11.81a.75.75 0 0 1 .96-.31l4.52 2.055a.75.75 0 0 1 .34 1.056l-1.973 3.445a.75.75 0 0 1-1.09.234l-4.027-2.916a.75.75 0 0 1-.21-.98zM8.17 11.822a.75.75 0 0 0-.96-.31l-4.52 2.055a.75.75 0 0 0-.34 1.056l1.973 3.444a.75.75 0 0 0 1.09.235l4.027-2.917a.75.75 0 0 0 .21-.98z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m8.035 12.384 2.165-1.25 1 1.732-2.165 1.25zM14.965 14.116l-2.165-1.25 1-1.732 2.165 1.25z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M13 20.5h5v2H6v-2h5v-7.75h2z" />
    </svg>
  );
};
export default WindTurbine;
