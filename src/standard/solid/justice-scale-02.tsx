import React from "react";
const JusticeScale_02: React.FC<
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
        d="M18 9a1 1 0 0 1 .92.606l3 7a1 1 0 1 1-1.839.788l-2.08-4.855-2.082 4.855a1 1 0 0 1-1.838-.788l3-7a1 1 0 0 1 .92-.606M6 9a1 1 0 0 1 .92.606l3 7a1 1 0 1 1-1.839.788l-2.08-4.855-2.082 4.855a1 1 0 0 1-1.838-.788l3-7A1 1 0 0 1 6.001 9"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.775 9.213c-1.643-1.617-3.907-1.617-5.55 0C8.073 10.349 6.6 11 5.049 11H3.5a1 1 0 1 1 0-2h1.548c.975 0 1.955-.407 2.775-1.213 2.421-2.383 5.933-2.383 8.354 0 .82.806 1.8 1.213 2.775 1.213H20.5a1 1 0 1 1 0 2h-1.548c-1.552 0-3.024-.652-4.178-1.787"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2M9 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0M1 17a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1 5 5 0 0 1-10 0M13 17a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1 5 5 0 0 1-10 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default JusticeScale_02;
