import React from "react";
const SignalLowMedium: React.FC<
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
        d="M4.941 4.25c-.81 0-1.497 0-2.016.072-.524.073-1.122.25-1.454.825q-.078.136-.132.282c-.226.614.008 1.19.276 1.65s.696 1.01 1.203 1.661l.806 1.034c.123.16.25.321.374.46V19a1 1 0 1 0 2 0v-8.766c.125-.138.252-.3.376-.46l.805-1.034c.507-.652.935-1.202 1.203-1.661.269-.46.502-1.036.276-1.65a2 2 0 0 0-.132-.282c-.331-.575-.93-.752-1.453-.825-.52-.072-1.207-.072-2.017-.072zM9 12a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M13 10a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0v-8a1 1 0 0 1 1-1M16 19a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1M20 19a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SignalLowMedium;
