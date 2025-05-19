import React from "react";
const Taxi_02: React.FC<
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
        d="M10 2.25A1.75 1.75 0 0 0 8.25 4v.75h-.417a2.75 2.75 0 0 0-2.538 1.692l-1.616 3.88L2.45 9.4a.75.75 0 1 0-.9 1.2l1.432 1.074-1.27 1.906a2.75 2.75 0 0 0-.462 1.526v5.644a1 1 0 0 0 1 1H4a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1a1 1 0 0 0 1 1h1.75a1 1 0 0 0 1-1v-5.644a2.75 2.75 0 0 0-.462-1.526l-1.27-1.906L22.45 10.6a.75.75 0 1 0-.9-1.2l-1.229.921-1.616-3.879a2.75 2.75 0 0 0-2.538-1.692h-.417V4A1.75 1.75 0 0 0 14 2.25zm-1 4H7.833c-.505 0-.96.303-1.154.77l-1.652 3.964 1.065.266h11.815l1.065-.266-1.652-3.965a1.25 1.25 0 0 0-1.154-.769H9M18 14a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V15a1 1 0 0 1 1-1M7 15a1 1 0 1 0-2 0v.01a1 1 0 1 0 2 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Taxi_02;
