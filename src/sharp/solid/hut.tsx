import React from "react";
const Hut: React.FC<
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
        d="M19.181 14.082H4.82l-1.554 7.77A.75.75 0 0 0 4 22.75h16a.75.75 0 0 0 .735-.897zM10 16.25a.75.75 0 0 0-.735.603l-1 5 1.47.294.88-4.397h2.77l.88 4.397 1.47-.294-1-5A.75.75 0 0 0 14 16.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.25 12.582H3a.75.75 0 0 1-.524-1.286l8.398-8.211-.826-.67.945-1.165L12 2.067l1.006-.817.945 1.165-.825.67 8.398 8.211A.75.75 0 0 1 21 12.582h-4.25V10h-1.5v2.582h-2.5V8h-1.5v4.582h-2.5V10h-1.5z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22 22.75H2v-2h20z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hut;
