import React from "react";
const Service: React.FC<
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
        d="M20.233 16.32c-1.69 2.084-4.268 3.955-7.89 5.302l-.342.128-.343-.128C5.541 19.345 2.4 15.567 1.513 11.856c-.874-3.657.483-7.253 3.322-8.767 2.26-1.204 4.253-.925 5.663-.324a7.2 7.2 0 0 1 1.611.958l-1.703 1.181a5 5 0 0 0-.679-.353c-.966-.412-2.325-.625-3.968.25-1.887 1.007-3.062 3.604-2.344 6.605.69 2.887 3.173 6.156 8.586 8.266 2.793-1.089 4.806-2.488 6.192-3.977z"
      />
      <path
        fill="currentColor"
        d="M13.506 2.765c1.41-.6 3.403-.88 5.662.324 4.02 2.144 5.044 8.325 1.066 13.231l-.769.885-5.7-6.857-1.924 1.274a3.15 3.15 0 0 1-4.293-.782 3.107 3.107 0 0 1 .673-4.31l3.673-2.807c.373-.294.92-.663 1.611-.958"
      />
    </svg>
  );
};
export default Service;
