import React from "react";
const BitcoinReceive: React.FC<
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
        d="M3.432 3.8V3h2v.8H7.22V3h2v.879c.828.19 1.526.709 2.028 1.372.637.84 1.002 1.957 1.002 3.149s-.365 2.309-1.002 3.15q-.181.24-.395.45.213.21.395.45c.637.841 1.002 1.958 1.002 3.15s-.365 2.309-1.002 3.15c-.502.662-1.2 1.18-2.028 1.371V21h-2v-.8H5.432v.8h-2v-.8H1.25v-2h.667V5.8H1.25v-2zm.485 2V11h4.606c.372 0 .781-.197 1.131-.658.35-.463.596-1.146.596-1.942s-.246-1.48-.596-1.942-.76-.658-1.131-.658zM8.523 13H3.917v5.2h4.606c.372 0 .781-.197 1.131-.658.35-.463.596-1.146.596-1.942s-.246-1.48-.596-1.942S8.894 13 8.523 13M17.043 8.293l1.414 1.414L17.164 11h5.586v2h-5.586l1.293 1.293-1.414 1.414L13.336 12z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinReceive;
