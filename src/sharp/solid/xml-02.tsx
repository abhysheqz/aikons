import React from "react";
const Xml_02: React.FC<
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
        d="m7.512 13.25.988 1.792 1.028-1.792h1.501L9.375 16.5l1.654 3.25H9.528L8.5 17.958l-.988 1.792H5.97l1.654-3.25-1.654-3.25zm4.238 0h1.675l1.075 1.792 1.075-1.792h1.675v6.5h-1.5v-3.876l-1.25 2.084-1.25-2.084v3.876h-1.5zm8 0v5h2v1.5h-3.5v-6.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m2.251 1.25-.001 21.5h17.5V21H3.932l2.29-4.5-2.29-4.5H19.75V8.63l-7.39-7.38zm9.312 1.955 6.236 6.255h-6.236z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Xml_02;
