import React from "react";
const MailSend_01: React.FC<
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
        d="M1 5.932A2.93 2.93 0 0 1 3.932 3h15.64a2.93 2.93 0 0 1 2.932 2.932v4.604a.977.977 0 0 1-1.955 0V8.218l-7.595 3.797a2.69 2.69 0 0 1-2.404 0L2.955 8.218v9.444c0 .54.437.977.977.977h8.044a.977.977 0 0 1 0 1.955H3.932A2.93 2.93 0 0 1 1 17.66z"
      />
      <path
        fill="currentColor"
        d="M13.003 17.297a1 1 0 0 1 1-1h4.293v-1.793c0-.265.097-.543.345-.64a1 1 0 0 1 1.07.226l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.07.225c-.248-.096-.345-.374-.345-.64v-1.792h-4.293a1 1 0 0 1-1-1"
      />
    </svg>
  );
};
export default MailSend_01;
