import { Sheet, SheetRef } from "react-modal-sheet";
import { useRef } from "react";
import type { ModalProps } from "../../types/Modal";
import CustomButton from "../common/button";

const EditDeleteBottomSheet = ({ isOpen, onRequestClose }: ModalProps) => {
    const ref = useRef<SheetRef>(null);

    return (
        <Sheet
            isOpen={isOpen}
            onClose={onRequestClose}
            ref={ref}
            snapPoints={[0.25]}
        >
            <Sheet.Backdrop onTap={onRequestClose} />
            <Sheet.Container
                className="bg-white rounded-t-[40px] h-[10vh] w-full"
            >
                <Sheet.Header />
                <Sheet.Content>
                    <div className="flex flex-col justify-center items-center p-10 w-full text-center mb-5">
                        <h3
                            style={{ fontFamily: 'Ydestreet', fontWeight: '700' }}
                            className="text-lg font-semibold mb-6 w-full whitespace-nowrap text-center text-black">
                                축하글을 수정하거나 삭제하시겠어요?</h3>

                        <div className="flex flex-row justify-center gap-[10px]">
                            <CustomButton
                                className="px-[15px] py-[15px] w-fit whitespace-nowrap text-center"
                                >축하글 수정하기</CustomButton>
                            <CustomButton
                                className="px-[15px] py-[15px] w-fit whitespace-nowrap text-center"
                            >축하글 삭제하기</CustomButton>
                        </div>

                    </div>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
    )
}

export default EditDeleteBottomSheet;