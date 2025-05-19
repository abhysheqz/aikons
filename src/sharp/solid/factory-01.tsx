import React from "react";
const Factory_01: React.FC<
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
        d="M19.77 2.25c1.11 0 2.042.684 2.73 1.646L20.873 5.06c-.482-.674-.884-.809-1.103-.809s-.614.132-1.087.804l-.006.008c-.457.635-1.12 1.168-1.965 1.187-.862.02-1.542-.501-2.003-1.155-.48-.672-.882-.807-1.103-.807-.222 0-.624.135-1.106.81l-1.627-1.164c.689-.963 1.62-1.646 2.733-1.646 1.111 0 2.044.683 2.732 1.646l.005.007c.175.25.291.3.324.31.028-.008.17-.055.384-.353.68-.963 1.608-1.647 2.719-1.647m-3.093 2h-.006zM22.5 21.75h-21v-2h21z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.75 7.25V8c0 5.915.985 9.794 2.42 12.665H2.83C4.264 17.794 5.25 13.915 5.25 8v-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.324 11.037h5.5v1c0 3.731 1.393 6.478 3.207 8.292l-1.414 1.415c-2.011-2.012-3.533-4.928-3.763-8.707h-3.53z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Factory_01;
