import { InquiryContent } from '..';

export function InquiryQuestion() {
  const content = `스티로폼 박스도 손실되어 있어 포장이 터져 왔어요. 
환불 요청합니다.`;

  return (
    <>
      <InquiryContent
        addTime={false}
        content={content}
        iconName="Question"
        title="질문"
      />
    </>
  );
}
