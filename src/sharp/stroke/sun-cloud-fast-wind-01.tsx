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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.5 17.75c2.485 0 4.5-1.98 4.5-4.424S19.985 8.9 17.5 8.9h-.022m0 0q.021-.243.022-.491C17.5 5.422 15.038 3 12 3 9.123 3 6.762 5.172 6.52 7.94m10.958.96a5.34 5.34 0 0 1-1.235 2.95M6.52 7.94C3.984 8.176 2 10.276 2 12.833c0 5.315 8.873 6.927 11.732 2.95.764-1.298-.258-2.95-1.732-2.95-1.105 0-2 .88-2 1.967M6.52 7.939q.237-.022.48-.022c1.126 0 2.165.366 3 .983"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 4.655A3.84 3.84 0 0 0 5.844 3 3.85 3.85 0 0 0 2 6.857C2 8.154 2.638 9.3 3.616 10M14.154 21.915q.218.084.461.085C15.38 22 16 21.328 16 20.5s-.62-1.5-1.385-1.5c-.271 0-.524.085-.738.23-1.061.793-3.027 1.808-5.262 2.071m-2.769-.107A7.6 7.6 0 0 1 4 20.548M19 21h2"
      />
    </svg>
  );
};
export default SunCloudFastWind_01;
