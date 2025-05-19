import React from "react";
const Book_03: React.FC<
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
        d="M6.742 1A4 4 0 0 0 2.75 5.236v8.82c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h1.113c1.837 0 3.293 0 4.432-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433V10a2.75 2.75 0 0 0-2.75-2.75V6.5a2.5 2.5 0 0 0-2.5-2.5h-8.5a1 1 0 0 0 0 2h8.5a.5.5 0 0 1 .5.5V7H6.742a2 2 0 1 1 0-4h12a1 1 0 1 0 0-2zM12 11.25c-.547 0-1.06.319-1.282.837l-2.407 5.618a.75.75 0 1 0 1.379.59l.662-1.545h3.297l.662 1.545a.75.75 0 0 0 1.379-.59l-2.408-5.618A1.39 1.39 0 0 0 12 11.25m0 1.654 1.006 2.346h-2.011z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Book_03;
