import React from "react";
const Sleeping: React.FC<
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
        d="M19.082 3.125h-2.083a1 1 0 1 1 0-2h2.987c.261 0 .561 0 .803.036.247.038.826.171 1.078.784.24.586-.043 1.082-.173 1.282a6 6 0 0 1-.514.639l-.033.038-.057.06-2.23 2.161h2.122a1 1 0 1 1 0 2h-3.026c-.262 0-.562 0-.803-.036-.247-.038-.827-.17-1.079-.784-.24-.586.043-1.082.174-1.282.134-.206.333-.433.513-.639l.034-.038.056-.06z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1.375c-5.937 0-10.75 4.813-10.75 10.75S6.063 22.875 12 22.875s10.75-4.813 10.75-10.75c0-.79-.085-1.56-.247-2.3-.046-.212-.069-.317-.151-.384-.083-.066-.195-.066-.42-.066h-4.01c-.007 0-.622 0-.958-.05-.334-.051-1.527-.283-2.046-1.545-.493-1.199.112-2.18.283-2.44.068-.105.218-.285.38-.471.238-.274.357-.411.352-.53s-.17-.279-.497-.596a2.24 2.24 0 0 1-.687-1.618c0-.123 0-.185-.004-.208-.02-.127-.065-.184-.184-.232-.022-.009-.057-.017-.127-.033A10.8 10.8 0 0 0 12 1.375m-5.03 8.72a.75.75 0 0 1 1.06 0c.18.18.423.28.677.28H10a.75.75 0 0 1 0 1.5H8.707a2.46 2.46 0 0 1-1.737-.72.75.75 0 0 1 0-1.06m10.06 0a.75.75 0 0 1 0 1.06c-.46.461-1.085.72-1.737.72H14a.75.75 0 0 1 0-1.5h1.293c.254 0 .497-.1.677-.28a.75.75 0 0 1 1.06 0m-6.28 6.03a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0m1.25-2.75a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Sleeping;
