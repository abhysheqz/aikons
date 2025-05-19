import React from "react";
const Bed: React.FC<
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
        d="M3 4a1 1 0 0 0-2 0v17a1 1 0 1 0 2 0v-4h2v1a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-1h1v4a1 1 0 1 0 2 0V9a1 1 0 1 0-2 0v1H7.444c.19-.434.392-.895.485-1.128a1 1 0 0 0-.557-1.3l-2.5-1c-.513-.205-.872-.072-1.3.557-.207.315-.404.647-.572.942zm2 7.618V15H3v-4.382zM20 15v-3h1v3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Bed;
