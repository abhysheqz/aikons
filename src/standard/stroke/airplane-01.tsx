import React from "react";
const Airplane_01: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.422 13.179 3 14.6l4.267 2.133L9.401 21l1.422-1.422-.356-3.2 2.845-2.844 3.912 6.044 1.317-1.316a2.01 2.01 0 0 0 .522-1.934L17.58 10.69l1.827-1.547c1.625-1.374 2.084-3.786 1.017-5.564-1.778-1.066-4.605-.664-5.966 1.241l-1.146 1.604L7.673 4.94a2.01 2.01 0 0 0-1.934.523L4.422 6.779l6.046 3.91-2.845 2.845z"
      />
    </svg>
  );
};
export default Airplane_01;
