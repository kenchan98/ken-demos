import { useRouter } from "next/navigation";

export default function PhoneAppHeader(props) {
  const router = useRouter();
  const {
    title,
    buttonBack,
    onClickBackButton = () => {
      router.back();
    },
    buttonClose,
    onClickCloseButton,
  } = props;
  return (
    <div className="h-16 flex-none sticky top-0 w-full text-white bg-gray-900 font-bold">
      {buttonBack && (
        <div
          className="absolute top-0 left-0 flex h-16 justify-center items-center text-xs p-4 text-blue-600 "
          onClick={onClickBackButton}
        >
          BACK
        </div>
      )}
      {buttonClose && (
        <div
          className="absolute top-0 right-0 flex h-16 justify-center items-center text-xs p-4 text-blue-600"
          onClick={onClickCloseButton}
        >
          CLOSE
        </div>
      )}

      <h1 className="flex h-full  justify-center items-center">{title}</h1>
    </div>
  );
}
