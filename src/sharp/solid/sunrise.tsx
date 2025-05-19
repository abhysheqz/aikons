import React from "react";
const Sunrise: React.FC<
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
        d="m12 2.5 3.207 3.207-1.414 1.414L13 6.328v3.586h-2V6.328l-.793.793-1.414-1.414zM16.242 10.843l1.414-1.414 1.414 1.414-1.414 1.414zM3 15.5h2v2H3zM6.344 9.429l1.414 1.414-1.414 1.414-1.415-1.414zM19 15.5h2v2h-2zM3 19.5h18v2H3z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M7 17.5v-1a5 5 0 0 1 10 0v1z" />
    </svg>
  );
};
export default Sunrise;
