import React from "react";
const BitcoinPiggyBank: React.FC<
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
        d="M16.75 1.25v1.5h1.125c1.035 0 1.875.84 1.875 1.875v.75c0 .422-.14.812-.375 1.125.235.313.375.703.375 1.125v.75c0 1.036-.84 1.875-1.875 1.875H16.75v1.5h-1.5v-1.5h-3v-1.5h1.125v-4.5H12.25v-1.5h3v-1.5zm-1.875 3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375zm3 3h-3v1.5h3a.375.375 0 0 0 .375-.375v-.75a.375.375 0 0 0-.375-.375"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.841 5.693c.57-.14 1.264-.257 2.034-.317V7.25H10.75v4.5h3v1.5h4.5v-1.52a3.38 3.38 0 0 0 2.946-2.749 8.8 8.8 0 0 1 .994 1.753l.002.005c.36.862.558 1.792.558 2.761 0 2.244-1.407 4.405-3 5.841v3.41h-3.151l-.937-1.407c-1.625.319-3.699.319-5.324 0l-.937 1.406H6.25v-3.217c-.378-.15-.995-.421-1.564-.752-1.13-.657-2.596-1.895-3.436-3.542v-3.49h2.17c.39-1.232 1.2-2.44 2.199-3.448 1.165-1.177 2.651-2.15 4.191-2.6l.016-.005zM7.5 11a1 1 0 1 0 0 2h.009a1 1 0 1 0 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BitcoinPiggyBank;
