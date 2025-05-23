import React from "react";
const Profit: React.FC<
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
        d="M12.3 20.85c-.297-.223-.69-.582-.924-.933a.75.75 0 0 1 0-.833c.323-.436.627-.711.924-.934.597-.448 1.5-.9 2.7-.9s2.103.452 2.7.9c.297.223.554.428.924.934a.75.75 0 0 1 0 .832c-.211.317-.627.711-.924.934-.597.448-1.5.9-2.7.9s-2.103-.452-2.7-.9"
      />
      <path
        fill="currentColor"
        d="M6.3 20.85c-.297-.223-.69-.582-.924-.933a.75.75 0 0 1 0-.833c.323-.436.627-.711.924-.934.597-.448 1.5-.9 2.7-.9s2.103.452 2.7.9c.297.223.554.428.924.934a.75.75 0 0 1 0 .832c-.212.317-.627.711-.924.934-.597.448-1.5.9-2.7.9s-2.103-.452-2.7-.9"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.25a7.75 7.75 0 1 0 0 15.5 7.75 7.75 0 0 0 0-15.5M12.75 5a.75.75 0 0 0-1.5 0v.583H9.5a.75.75 0 0 0 0 1.5h.188v3.834H9.5a.75.75 0 0 0 0 1.5h1.75V13a.75.75 0 0 0 1.5 0v-.583h.813c.976 0 1.687-.83 1.687-1.75V10c0-.362-.11-.71-.303-1 .193-.29.303-.638.303-1v-.667c0-.92-.71-1.75-1.687-1.75h-.813zm-1.562 3.25V7.083h2.374c.06 0 .188.066.188.25V8c0 .184-.129.25-.187.25zm0 1.5h2.374c.06 0 .188.066.188.25v.667c0 .184-.129.25-.187.25h-2.376z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Profit;
