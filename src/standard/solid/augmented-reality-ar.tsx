import React from "react";
const AugmentedRealityAr: React.FC<
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
        d="M5 2.25A3.75 3.75 0 0 0 1.25 6v12A3.75 3.75 0 0 0 5 21.75h14A3.75 3.75 0 0 0 22.75 18V6A3.75 3.75 0 0 0 19 2.25zm2.997 6a.75.75 0 0 0-.712.513l-1.997 6a.75.75 0 0 0 1.424.474l1.787-5.37 1.79 5.37a.75.75 0 0 0 1.422-.474l-2-6A.75.75 0 0 0 9 8.25zm6.003 0a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0v-1.75h1.037l1.042 2.085a.75.75 0 1 0 1.342-.67L17.339 13A2.5 2.5 0 0 0 16.25 8.25zm2.25 3.5h-1.5v-2h1.5a1 1 0 1 1 0 2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AugmentedRealityAr;
