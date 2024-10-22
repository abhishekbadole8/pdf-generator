interface ICustomButton {
  title: string;
  handlePress: () => void;
  otherStyles?: any;
  isLoading?: boolean;
}

export default function CustomButton({
  title,
  handlePress,
  otherStyles,
  isLoading,
}: ICustomButton) {
  return (
    <button
      className={`bg-buttonColor-primary max-h-[41px] text-sm font-medium rounded-md py-3 px-4 ${otherStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
      style={{ fontFamily: "Pretendard, sans-serif" }}
      onClick={handlePress}
    >
      {title}
      {isLoading && (
        // Here Loading animation
        <> Loading...</>
      )}
    </button>
  );
}
