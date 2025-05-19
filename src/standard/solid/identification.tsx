import React from "react";
const Identification: React.FC<
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
        d="M1.5 4.5a3 3 0 0 1 3-3h4a1 1 0 0 1 0 2h-4a1 1 0 0 0-1 1v4a1 1 0 0 1-2 0zm13-2a1 1 0 0 1 1-1h4a3 3 0 0 1 3 3v4a1 1 0 1 1-2 0v-4a1 1 0 0 0-1-1h-4a1 1 0 0 1-1-1m-12 12a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h4a1 1 0 1 1 0 2h-4a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1m19 0a1 1 0 0 1 1 1v4a3 3 0 0 1-3 3h-4a1 1 0 1 1 0-2h4a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1M7.184 16.422c2.215-3.127 7.34-3.334 9.64.012A1 1 0 0 1 16 18H8a1 1 0 0 1-.816-1.578M8.75 9.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Identification;
