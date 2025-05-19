import React from "react";
const BriefcaseDollar: React.FC<
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
        d="M7.5 2.75a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v3.5h-2v-2.5h-5v2.5h-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.75 6a.75.75 0 0 1 .75-.75h19a.75.75 0 0 1 .75.75v5.25H18v1.5h4.25v8.75a.75.75 0 0 1-.75.75h-19a.75.75 0 0 1-.75-.75v-8.75H6v-1.5H1.75zm8.386 4.84a2.95 2.95 0 0 1 1.114-.506V9.5h1.5v.835c.789.18 1.485.645 1.815 1.345l-1.357.64c-.117-.249-.54-.57-1.208-.57-.406 0-.744.124-.964.29-.22.164-.286.335-.286.46s.066.296.286.46c.22.166.558.29.964.29.699 0 1.36.211 1.864.59.504.377.886.957.886 1.66s-.382 1.283-.886 1.66a2.95 2.95 0 0 1-1.114.506v.834h-1.5v-.834c-.789-.181-1.485-.646-1.815-1.346l1.357-.64c.117.249.54.57 1.208.57.406 0 .744-.124.964-.29.22-.164.286-.335.286-.46s-.066-.296-.286-.46c-.22-.166-.558-.29-.964-.29-.699 0-1.36-.211-1.864-.59-.504-.377-.886-.957-.886-1.66s.382-1.283.886-1.66"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BriefcaseDollar;
