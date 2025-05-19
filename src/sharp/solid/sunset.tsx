import React from "react";
const Sunset: React.FC<
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
        d="m12 9.914 3.207-3.207-1.414-1.414-.793.793V2.5h-2v3.586l-.793-.793-1.414 1.414zM16.242 10.844l1.414-1.414 1.415 1.414-1.415 1.414zM3 15.501h2v2H3zM6.344 9.43l1.414 1.414-1.414 1.414-1.415-1.414zM19 15.501h2v2h-2zM3 19.501h18v2H3z"
        clipRule="evenodd"
      />
      <path fill="currentColor" d="M17 17.501H7v-1a5 5 0 0 1 10 0z" />
    </svg>
  );
};
export default Sunset;
