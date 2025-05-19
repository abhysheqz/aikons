import React from "react";
const Flash: React.FC<
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
        d="M14.261 1.297A.75.75 0 0 1 14.75 2v8.25h4.75a.75.75 0 0 1 .568 1.24l-9.5 11A.75.75 0 0 1 9.25 22v-8.25H4.5a.75.75 0 0 1-.568-1.24l9.5-11a.75.75 0 0 1 .83-.213"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Flash;
