import React from "react";
const PreferenceHorizontal: React.FC<
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
        d="M12.25 3.5c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25zM7.25 10.5c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25zM10.25 17.5c0-.69.56-1.25 1.25-1.25h2c.69 0 1.25.56 1.25 1.25v3c0 .69-.56 1.25-1.25 1.25h-2c-.69 0-1.25-.56-1.25-1.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 5a1 1 0 0 1-1 1H3.5a1 1 0 1 1 0-2H13a1 1 0 0 1 1 1M12 19a1 1 0 0 1-1 1H3.5a1 1 0 1 1 0-2H11a1 1 0 0 1 1 1M21.5 19a1 1 0 0 1-1 1h-4a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1M21.5 12a1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h9.5a1 1 0 0 1 1 1M21.5 5a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1M6.5 12a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PreferenceHorizontal;
