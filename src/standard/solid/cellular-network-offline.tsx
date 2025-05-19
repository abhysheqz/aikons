import React from "react";
const CellularNetworkOffline: React.FC<
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
        d="M4.28 3.198a1 1 0 0 1 .206 1.399C3.542 5.867 3 7.38 3 9s.542 3.133 1.486 4.403a1 1 0 1 1-1.604 1.194C1.699 13.007 1 11.08 1 9s.699-4.006 1.882-5.597a1 1 0 0 1 1.399-.205m15.44 0a1 1 0 0 1 1.398.205C22.301 4.993 23 6.92 23 9s-.699 4.006-1.882 5.597a1 1 0 1 1-1.604-1.194C20.458 12.133 21 10.62 21 9s-.542-3.133-1.486-4.403a1 1 0 0 1 .205-1.4"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-20-20a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.544 5.132a1 1 0 0 0-.3.264C5.467 6.422 5 7.659 5 9c0 1.34.466 2.578 1.245 3.604a1 1 0 1 0 1.593-1.208C7.297 10.683 7 9.863 7 9s.297-1.683.838-2.396q.04-.051.071-.107zM17.756 5.396a1 1 0 1 0-1.594 1.208C16.703 7.317 17 8.137 17 9s-.297 1.683-.838 2.396a1 1 0 1 0 1.594 1.208C18.534 11.578 19 10.341 19 9c0-1.34-.466-2.578-1.244-3.604M9.43 8.018A2.75 2.75 0 0 0 11 11.562V20a1 1 0 1 0 2 0v-8.412zM14.193 10.66a2.75 2.75 0 0 0-3.852-3.853z"
      />
    </svg>
  );
};
export default CellularNetworkOffline;
