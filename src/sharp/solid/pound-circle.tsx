import React from "react";
const PoundCircle: React.FC<
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
        d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75 22.75 17.937 22.75 12 17.937 1.25 12 1.25m-1.367 9c0-1.148.865-2 1.838-2s1.838.852 1.838 2h1.5c0-1.89-1.452-3.5-3.338-3.5s-3.338 1.61-3.338 3.5c0 .735.22 1.428.599 2H8.5v1.5h1.918c-.167.318-.348.62-.543.893-.401.563-.829.968-1.267 1.185a.75.75 0 0 0 .333 1.422h5.589v-.75.75h.026a3 3 0 0 0 .195-.013 3.4 3.4 0 0 0 .474-.082c.368-.091.879-.285 1.303-.706l-1.056-1.065a1.3 1.3 0 0 1-.608.315 2 2 0 0 1-.329.05l-.01.001H10.92q.09-.117.176-.237c.386-.543.714-1.151.988-1.763H13.5v-1.5h-1.03c-.972 0-1.837-.852-1.837-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PoundCircle;
