import React from "react";
const SearchDollar: React.FC<
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
        d="m21.586 23-4.793-4.793 1.414-1.414L23 21.586z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1 11C1 5.477 5.477 1 11 1s10 4.477 10 10-4.477 10-10 10S1 16.523 1 11m10-8a8 8 0 1 0 0 16 8 8 0 0 0 0-16"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 6.637c-1.229.338-2.292 1.288-2.292 2.678 0 .73.243 1.464.935 1.964.62.448 1.45.592 2.357.592.769 0 1.14.127 1.302.24.083.059.198.163.198.574 0 .306-.104.444-.274.553-.228.147-.636.262-1.226.262-.502 0-.916-.15-1.18-.34-.265-.193-.32-.373-.32-.475h-2c0 .901.505 1.628 1.145 2.093.39.284.854.49 1.355.608V16.5h2v-1.086c.464-.085.915-.24 1.31-.495.735-.474 1.19-1.242 1.19-2.234 0-.885-.302-1.688-1.052-2.212-.671-.47-1.55-.602-2.448-.602-.76 0-1.076-.134-1.185-.213l-.003-.002c-.038-.027-.104-.074-.104-.341 0-.245.348-.815 1.292-.815s1.292.57 1.292.815h2c0-1.39-1.063-2.34-2.292-2.678V5.5h-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SearchDollar;
