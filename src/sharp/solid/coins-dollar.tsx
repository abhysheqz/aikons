import React from "react";
const CoinsDollar: React.FC<
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
        d="M4.032 7.6c-.184.77-.282 1.574-.282 2.4 0 5.66 4.59 10.25 10.25 10.25.826 0 1.63-.098 2.4-.282A8.75 8.75 0 1 1 4.032 7.6"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 1.25a8.75 8.75 0 1 0 0 17.5 8.75 8.75 0 0 0 0-17.5m-1.864 5.59a2.95 2.95 0 0 1 1.114-.506V5.5h1.5v.835c.789.18 1.485.645 1.815 1.345l-1.357.64c-.117-.249-.54-.57-1.208-.57-.406 0-.744.124-.964.29-.22.164-.286.335-.286.46s.066.296.286.46c.22.166.558.29.964.29.699 0 1.36.212 1.864.59.504.377.886.957.886 1.66s-.382 1.283-.886 1.66a2.95 2.95 0 0 1-1.114.506v.834h-1.5v-.835c-.789-.18-1.485-.645-1.815-1.345l1.357-.64c.117.249.54.57 1.208.57.406 0 .744-.124.964-.29.22-.164.286-.335.286-.46s-.066-.296-.286-.46c-.22-.166-.558-.29-.964-.29-.699 0-1.36-.211-1.864-.59-.504-.377-.886-.957-.886-1.66s.382-1.283.886-1.66"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default CoinsDollar;
