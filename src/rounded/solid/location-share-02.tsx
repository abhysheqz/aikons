import React from "react";
const LocationShare_02: React.FC<
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
        d="M12 2.75c-4.478 0-8.25 3.769-8.25 8.337 0 4.68 3.858 7.808 7.077 9.84l.013.009.013.007a2.3 2.3 0 0 0 2.294 0l.011-.007.012-.007c3.232-2.017 7.08-5.178 7.08-9.842 0-4.568-3.772-8.337-8.25-8.337m0 4.75a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7M2.732 6.084A1 1 0 0 1 3.249 7.4a9.03 9.03 0 0 0 0 7.2 1 1 0 1 1-1.833.8c-1.221-2.8-1.221-6 0-8.8a1 1 0 0 1 1.316-.516m18.536 0a1 1 0 0 1 1.316.516c1.221 2.8 1.221 6 0 8.8a1 1 0 1 1-1.833-.8 9.03 9.03 0 0 0 0-7.2 1 1 0 0 1 .517-1.316"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationShare_02;
