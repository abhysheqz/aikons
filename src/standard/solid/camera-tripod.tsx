import React from "react";
const CameraTripod: React.FC<
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
        d="M11.583 16.966a1 1 0 0 0-1 .097l-4.167 3a1 1 0 0 0 1.168 1.624L11 19.226v2.648a1 1 0 0 0 2 0v-2.648l3.416 2.46a1 1 0 1 0 1.168-1.624l-4.166-3a1 1 0 0 0-1.001-.097 1 1 0 0 0-.834 0"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 1.125a2.75 2.75 0 0 0-2.75 2.75v12A2.75 2.75 0 0 0 4 18.625h16a2.75 2.75 0 0 0 2.75-2.75v-12A2.75 2.75 0 0 0 20 1.125zm8 5.25a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CameraTripod;
