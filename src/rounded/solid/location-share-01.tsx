import React from "react";
const LocationShare_01: React.FC<
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
        d="M3.232 6.084A1 1 0 0 1 3.749 7.4a9.03 9.03 0 0 0 0 7.202 1 1 0 0 1-1.833.8 11.03 11.03 0 0 1 0-8.801 1 1 0 0 1 1.316-.517m17.536 0a1 1 0 0 1 1.316.517c1.221 2.8 1.221 6 0 8.8a1 1 0 0 1-1.833-.799 9.03 9.03 0 0 0 0-7.202 1 1 0 0 1 .517-1.316M12 3.25c-3.05 0-5.948 1.855-7.158 4.766-1.127 2.71-.515 5.019.75 6.986 1.034 1.606 2.54 3.04 3.885 4.318q.384.364.744.712l.002.002a2.56 2.56 0 0 0 3.555 0q.34-.327.701-.668l.001-.001c1.36-1.288 2.887-2.736 3.93-4.362 1.264-1.969 1.875-4.28.75-6.987C17.949 5.105 15.05 3.25 12 3.25M12 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default LocationShare_01;
