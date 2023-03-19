import {} from 'prop-types';
import { A11yHidden, IconComponent } from '..';

import classes from './InquiryContent.module.css';

export function InquiryContent() {
  return (
    <tr className={classes.inquiryContent}>
      <td colSpan="4">
        <div className={classes.question}>
          <A11yHidden>질문</A11yHidden>
          <IconComponent data-image="Question" />
          <p>
            {`스티로폼 박스도 손실되어 있어 포장이 터져 왔어요. 
환불 요청합니다.`}
          </p>
        </div>

        <div className={classes.answer}>
          <A11yHidden>답변</A11yHidden>
          <IconComponent data-image="Answer" />
          <div className={classes.answerContent}>
            <p>
              {`안녕하세요. 칼리입니다.
믿고 찾아주신 상품에 불편을 드려 정말 죄송합니다. 

더불어, 해당 게시판은 실시간으로 상담이 어려워
순차적으로 답변드리고 있는 관계로 신속하게 답변 드리지 못하여
대단히 죄송합니다.  

다행히도 고객님의 불편하셨던 사항은고객행복센터를 통해 안내 받으신 점 확인하였습니다. 

불편을 드려
정말 죄송할 따름이며, 고객님께 늘 신선하고 최상의 상품을 불편 없이
전달드리기 위해 최선을 다하는 칼리가 되겠습니다. 

칼리 드림.`}
            </p>
            <time dateTime={'2023-03-15'}>{'2023.03.15'}</time>
          </div>
        </div>
      </td>
    </tr>
  );
}
