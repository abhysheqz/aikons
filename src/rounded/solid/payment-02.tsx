import React from "react";
const Payment_02: React.FC<
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
        d="M1.25 4.5A.75.75 0 0 1 2 3.75h6.757a3.75 3.75 0 0 1 2.652 1.098L14.53 7.97a.75.75 0 0 1-1.06 1.06L10.348 5.91a2.25 2.25 0 0 0-1.59-.659H2a.75.75 0 0 1-.75-.75M1.25 13.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75"
      />
      <path
        fill="currentColor"
        d="M7.97 6.97a.75.75 0 0 1 1.06 0l2 2a2.164 2.164 0 1 1-3.06 3.06l-1.033-1.032a3.2 3.2 0 0 1-3.584-.17L3.05 10.6a.75.75 0 0 1 .9-1.2l.303.227c.675.507 1.62.44 2.217-.157a.75.75 0 0 1 1.06 0l1.5 1.5a.664.664 0 1 0 .94-.94l-2-2a.75.75 0 0 1 0-1.06"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.945 8.555c-.456-.455-1.023-.64-1.65-.725-.595-.08-1.344-.08-2.243-.08H9.5a.75.75 0 0 0-.53 1.28l1 1a.664.664 0 1 1-.94.94l-1.5-1.5a.75.75 0 0 0-1.06 0 1.7 1.7 0 0 1-1.387.486.75.75 0 0 0-.833.745v4.851c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h9.104c.899 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.343.08-2.242v-3.104c0-.899 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65M13.5 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Payment_02;
