import React from "react";
const PreferenceVertical: React.FC<
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
        d="M3.5 7.25h3c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25v-2c0-.69.56-1.25 1.25-1.25M10.5 12.25h3c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25v-2c0-.69.56-1.25 1.25-1.25M17.5 9.25h3c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-3c-.69 0-1.25-.56-1.25-1.25v-2c0-.69.56-1.25 1.25-1.25"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 2.5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1M5 10a1 1 0 0 1 1 1v9.5a1 1 0 1 1-2 0V11a1 1 0 0 1 1-1M19 2.5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m0 9.5a1 1 0 0 1 1 1v7.5a1 1 0 1 1-2 0V13a1 1 0 0 1 1-1M12 2.5a1 1 0 0 1 1 1V13a1 1 0 1 1-2 0V3.5a1 1 0 0 1 1-1m0 15a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PreferenceVertical;
