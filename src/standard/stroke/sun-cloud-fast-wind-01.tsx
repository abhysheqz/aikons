import React from "react";
const SunCloudFastWind_01: React.FC<
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
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 17.25c2.485 0 4.5-1.98 4.5-4.424S19.985 8.4 17.5 8.4h-.022m0 0q.021-.243.022-.491C17.5 4.922 15.038 2.5 12 2.5c-2.877 0-5.238 2.172-5.48 4.94m10.958.96a5.34 5.34 0 0 1-1.235 2.95M6.52 7.44C3.984 7.676 2 9.776 2 12.333c0 5.315 8.873 6.927 11.732 2.95.764-1.298-.258-2.95-1.732-2.95-1.105 0-2 .88-2 1.967M6.52 7.439q.237-.022.48-.022c1.126 0 2.165.366 3 .983"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.5 3.5c-.682-.621-1.662-1-2.656-1A3.85 3.85 0 0 0 2 6.357C2 7.356 2.379 8.315 3 9M14.154 21.415q.218.084.461.085C15.38 21.5 16 20.828 16 20s-.62-1.5-1.385-1.5c-.271 0-.524.085-.738.23-1.061.793-3.027 1.808-5.262 2.071m-2.769-.107A7.6 7.6 0 0 1 4 20.048M19 20.5h2"
      />
    </svg>
  );
};
export default SunCloudFastWind_01;
