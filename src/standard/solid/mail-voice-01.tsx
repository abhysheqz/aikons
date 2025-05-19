import React from "react";
const MailVoice_01: React.FC<
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
        d="M1 4.932A2.93 2.93 0 0 1 3.932 2h15.64a2.93 2.93 0 0 1 2.932 2.932v4.604a.977.977 0 0 1-1.955 0V7.218l-7.595 3.797a2.69 2.69 0 0 1-2.404 0L2.955 7.218v9.444c0 .54.437.977.977.977h8.044a.977.977 0 0 1 0 1.955H3.932A2.93 2.93 0 0 1 1 16.66z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.752 13.747a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1-5 0zm-1.447 3.106a1 1 0 0 1 1.342.447c.134.27.488.644 1.026.96.527.31 1.103.487 1.58.487.476 0 1.052-.177 1.578-.487.538-.316.892-.69 1.027-.96a1 1 0 0 1 1.788.894c-.365.73-1.063 1.356-1.801 1.79a5.7 5.7 0 0 1-1.593.644v1.12a1 1 0 1 1-2 0v-1.12a5.7 5.7 0 0 1-1.593-.644c-.738-.434-1.436-1.06-1.801-1.79a1 1 0 0 1 .447-1.341"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MailVoice_01;
