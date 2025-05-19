import React from "react";
const Hugeicons: React.FC<
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
        d="M6.025 8.5h11.95c-.274-2.748-2.782-5-5.975-5s-5.701 2.252-5.975 5m13.958 0H22a1 1 0 1 1 0 2h-.617l-.633 5.058c-.175 1.404-.318 2.552-.55 3.453-.241.943-.608 1.741-1.312 2.363-.704.62-1.541.886-2.507 1.009-.923.117-2.08.117-3.494.117h-1.774c-1.415 0-2.571 0-3.494-.117-.966-.123-1.803-.388-2.507-1.01-.704-.62-1.07-1.42-1.312-2.362-.232-.901-.375-2.049-.55-3.452L2.617 10.5H2a1 1 0 1 1 0-2h2.017c.276-3.968 3.81-7 7.983-7 4.174 0 7.707 3.032 7.983 7"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Hugeicons;
