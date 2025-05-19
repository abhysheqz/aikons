import React from "react";
const Doctor_03: React.FC<
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
        d="M7.75 5.5a4.25 4.25 0 0 1 8.5 0v1a4.25 4.25 0 0 1-8.5 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.562 13.134c-.6-.417-1.501-.884-2.562-.884h-3.31L12 13.94l-1.69-1.69H7c-1.06 0-1.962.467-2.561.884-.248.172-.76.669-1.037.938l-.152.146v8.532h17.5v-8.532c-.033-.03-.086-.082-.152-.146-.278-.27-.79-.766-1.037-.938M16.75 16.75v-2h-1.5v2h-2v1.5h2v2h1.5v-2h2v-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Doctor_03;
