import React from "react";
const Medal_05: React.FC<
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
        d="m14.375 13.045 4.81-1.504a.805.805 0 0 0 .511-1.055L16.302 1.25h-5.68z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.048 1.251H7.697l-3.394 9.235a.805.805 0 0 0 .511 1.055l5.943 1.857-.975 1.5-2.442.718c-.614.18-.774.897-.44 1.34L8.514 19.1l-.133 2.752c-.027.542.514 1.094 1.16.84l2.422-.954 2.445.955c.649.253 1.188-.306 1.157-.85l-.155-2.701 1.645-2.185c.334-.444.173-1.162-.442-1.342l-2.462-.717-1.478-2.261-.004-.007zM5.96 10.328l2.36-6.422 2.53 7.95zm4.778 5.854 1.227-1.888 1.235 1.889 2.1.612-1.418 1.884.129 2.248-2.049-.8-2.034.8.111-2.296-1.384-1.838z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Medal_05;
