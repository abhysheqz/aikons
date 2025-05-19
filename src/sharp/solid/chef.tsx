import React from "react";
const Chef: React.FC<
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
        d="M12 1.25a4.35 4.35 0 0 0-3.74 2.13 4.351 4.351 0 0 0-6.01 4.025c0 2.285 1.76 4.16 4 4.338v1.007H5v2h14v-2h-1.25v-1.007c2.24-.179 4-2.053 4-4.339a4.35 4.35 0 0 0-6.01-4.024A4.35 4.35 0 0 0 12 1.25"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.167 16v.964c0 2.13 1.716 3.857 3.833 3.857s3.833-1.727 3.833-3.857V16h1.917v.964c0 3.196-2.574 5.786-5.75 5.786s-5.75-2.59-5.75-5.786V16z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Chef;
