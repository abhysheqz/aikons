import React from "react";
const SignalMedium_01: React.FC<
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
        d="M4.943 4.25c-.81 0-1.497 0-2.017.072-.523.073-1.122.25-1.453.825q-.078.136-.132.282c-.226.614.007 1.19.276 1.65.268.46.696 1.01 1.203 1.661l.805 1.034c.124.16.25.321.375.46V19a1 1 0 1 0 2 0v-8.766c.125-.138.252-.3.375-.46l.806-1.034c.507-.652.935-1.202 1.203-1.661s.502-1.036.276-1.65a2 2 0 0 0-.132-.282c-.332-.575-.93-.752-1.454-.825-.519-.072-1.206-.072-2.016-.072z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 12a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M13 10a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1M17 9a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1M20 19a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SignalMedium_01;
