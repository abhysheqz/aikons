import React from "react";
const TradeDown: React.FC<
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
        d="M14 16a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 1 0-2 0v4h-4a1 1 0 0 0-1 1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M20.707 16.707a1 1 0 0 0 0-1.414l-5.038-5.038c-.409-.409-.776-.776-1.111-1.04-.365-.286-.792-.535-1.334-.584a2.5 2.5 0 0 0-.448 0c-.542.05-.97.298-1.334.584-.335.264-.703.631-1.11 1.04-.46.458-.78.777-1.01.958a.48.48 0 0 1-.643 0c-.23-.181-.513-.461-.972-.92l-3-3a1 1 0 0 0-1.414 1.414l3.038 3.038c.409.409.776.776 1.111 1.04.365.286.792.535 1.334.584q.225.02.448 0c.542-.05.97-.298 1.334-.584.335-.264.703-.631 1.11-1.04.46-.458.78-.777 1.01-.958.112-.09.397-.215.643 0 .23.181.513.461.972.92l5 5a1 1 0 0 0 1.414 0"
      />
    </svg>
  );
};
export default TradeDown;
