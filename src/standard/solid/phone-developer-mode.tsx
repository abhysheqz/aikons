import React from "react";
const PhoneDeveloperMode: React.FC<
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
        d="M7.167 1.246C5.832 1.246 4.75 2.34 4.75 3.69v2.84a.967.967 0 0 0 1.933 0V3.688c0-.27.217-.489.484-.489h2.302l.216.437c.164.331.499.54.865.54h2.9c.366 0 .7-.209.865-.54l.216-.437h2.302c.267 0 .484.219.484.489v2.841a.967.967 0 1 0 1.933 0V3.69c0-1.35-1.082-2.443-2.417-2.443zM4.75 20.303c0 1.35 1.082 2.443 2.417 2.443h9.666c1.335 0 2.417-1.094 2.417-2.443v-2.84a.967.967 0 1 0-1.933 0v1.533H6.683v-1.533a.967.967 0 1 0-1.933 0z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.543 7.789a1 1 0 0 1 1.414 0l3.5 3.5a1 1 0 0 1 0 1.414l-3.5 3.5a1 1 0 0 1-1.414-1.414l2.793-2.793-2.793-2.793a1 1 0 0 1 0-1.414M9.457 7.789a1 1 0 0 1 0 1.414l-2.793 2.793 2.793 2.793a1 1 0 1 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default PhoneDeveloperMode;
