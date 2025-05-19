import React from "react";
const MailUpload_02: React.FC<
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
        d="M1.25 2.5A.75.75 0 0 1 2 1.75h20a.75.75 0 0 1 .75.75v12.275l-3.707-3.707-5.475 5.475 3.182 3.182.043.525H2a.75.75 0 0 1-.75-.75zm5.166 3.876-.832 1.248L12 11.901l6.416-4.277-.832-1.248L12 10.099z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m19.043 12.836 3.707 3.707-1.414 1.414-1.293-1.293v5.586h-2v-5.586l-1.293 1.293-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailUpload_02;
