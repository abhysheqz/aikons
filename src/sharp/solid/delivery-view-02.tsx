import React from "react";
const DeliveryView_02: React.FC<
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
        d="M2 1.75a.75.75 0 0 0-.75.75v5.75h1v12.033c0 .257.103.503.286.684a.98.98 0 0 0 .689.283H10v-1.933H4.2V8.25h15.6v3.783L21.75 12V8.25h1V2.5a.75.75 0 0 0-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.5 11.5h-5v-2h5zM22.614 17.8c-.174-.26-.456-.678-.554-.805a12 12 0 0 0-1.144-1.284c-.94-.91-2.374-1.961-4.057-1.961s-3.116 1.051-4.057 1.96c-.485.47-.875.937-1.144 1.285-.098.127-.38.546-.554.805l-.135.2.135.2c.174.26.456.678.554.805.269.348.659.815 1.144 1.284.94.91 2.374 1.961 4.057 1.961s3.116-1.051 4.057-1.96c.485-.47.875-.937 1.144-1.285.098-.127.38-.546.554-.805l.135-.2zm-5.761-1.3c-.825 0-1.494.672-1.494 1.5s.669 1.5 1.494 1.5h.013c.825 0 1.493-.672 1.493-1.5s-.668-1.5-1.493-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default DeliveryView_02;
