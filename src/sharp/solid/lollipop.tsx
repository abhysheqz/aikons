import React from "react";
const Lollipop: React.FC<
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
        d="M11.25 22.25v-8h1.5v8z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.51 6.632a6.77 6.77 0 0 1 6.504-4.882 6.76 6.76 0 0 1 6.711 5.885c-1.46-.118-2.416.278-3.17.641l-.123.06c-.744.36-1.059.51-1.6.353-.67-.196-1.073-.605-1.615-1.181l-.031-.033c-.518-.55-1.178-1.25-2.29-1.571-.997-.288-2.18-.153-3.24.215-.39.135-.777.308-1.147.513"
      />
      <path
        fill="currentColor"
        d="M18.75 9.144a6.76 6.76 0 0 1-6.736 6.106c-3.67 0-6.658-2.915-6.764-6.55.5-.5 1.192-.912 1.933-1.17.865-.3 1.692-.355 2.269-.189.67.193 1.073.6 1.615 1.176l.035.037c.517.55 1.174 1.248 2.28 1.57 1.157.338 2.014-.085 2.683-.415q.094-.047.184-.09c.647-.312 1.343-.602 2.501-.475"
      />
    </svg>
  );
};
export default Lollipop;
