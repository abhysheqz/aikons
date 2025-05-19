import React from "react";
const MobileProgramming_01: React.FC<
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
        d="M5.219 1.25h13.56c.258 0 .504.103.686.286a.98.98 0 0 1 .283.692l-.001 5.863h-1.938l.002-4.886H6.188V8.09H4.25V2.227c0-.54.434-.977.969-.977M17.81 20.796l-.002-4.886 1.938-.001.002 5.863c0 .26-.102.508-.283.692a.96.96 0 0 1-.686.286H5.219a.96.96 0 0 1-.685-.286.98.98 0 0 1-.284-.691l.001-5.864h1.937v4.887z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.5 19h-3v-2h3zM10.05 14.684l2-6 1.898.632-2 6zM7.208 8.793l1.414 1.414L6.828 12l1.793 1.793-1.414 1.414L4 12zM17.172 12l-1.793-1.793 1.414-1.414L20 12l-3.207 3.207-1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MobileProgramming_01;
