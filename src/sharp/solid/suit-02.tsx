import React from "react";
const Suit_02: React.FC<
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
        d="M8.453 1.403a.75.75 0 0 0-.983.067L5.616 3.323l-3.798.95a.75.75 0 0 0-.554.874L4.385 20.75H7.5v-1.5H5.615L2.875 5.554l2.823-.705L8.4 8.459a.75.75 0 0 0 1.129.083l.342-.339.884 1.407-2.472 8.173a.75.75 0 0 0 .118.667l2.999 4a.75.75 0 0 0 1.2 0l3-4a.75.75 0 0 0 .118-.667L13.245 9.61l.884-1.407.343.34a.75.75 0 0 0 1.128-.084l2.702-3.61 2.822.705-2.739 13.696H16.5v1.5h3.115l3.12-15.603a.75.75 0 0 0-.553-.875l-3.799-.95L16.53 1.47a.75.75 0 0 0-.984-.067L12 4.094zm4.585 5.718L12 6.092l-1.038 1.03 1.037 1.65z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Suit_02;
