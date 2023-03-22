import { useId } from 'react';

import classes from './SignUp.module.css';
import { Button, Label } from '@/components';
import { Fieldset } from '@/components/Fieldset/Fieldset';
import { IconComponent } from '@/components/IconComponent/IconComponent';
import { Input } from '@/components/Input/Input';
// import { auth } from '@/firebase/auth';
import { useDocumentTitle } from '@/hook/useDocumentTitle';

export function SignUp() {
  const idId = useId();
  const passwordId = useId();
  const rePasswordId = useId();
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const addressId = useId();
  const genderId = useId();
  const maleId = useId();
  const femaleId = useId();
  const noneId = useId();
  const birthId = useId();
  const additionalInputId = useId();
  const recommendFriendId = useId();
  const eventId = useId();
  const etcId = useId();
  const etcAllId = useId();
  const etcFirstId = useId();
  const etcSecondId = useId();
  const etcThirdId = useId();
  const etcFourthId = useId();

  const dataProps = {
    width: '54px',
    height: '19px',
    fontSize: '0.7rem',
    backgroundPositionX: '95%',
    backgroundPositionY: 'center',
  };

  useDocumentTitle('회원가입 - 칼리');

  const handleExpandTerms = () => {
    console.log('expand terms');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '80px' }}>
      <div className={classes.signUp}>
        <h2>회원가입</h2>
        <Label fontSize="sm" isEssential="left">
          필수입력사항
        </Label>
        <form>
          <Fieldset className={classes.fieldset} legend="회원가입 폼 입니다.">
            <div className={classes.inputWrapper}>
              <Label
                className={classes.idLabel}
                htmlFor={idId}
                isEssential="right"
              >
                아이디
              </Label>
              <Input
                className={classes.idInput}
                id={idId}
                placeholder="아이디를 입력해주세요"
                useage="id"
              />
              <Button isSecondary className={classes.idButton}>
                중복확인
              </Button>
              <Label
                className={classes.pwLabel}
                htmlFor={passwordId}
                isEssential="right"
              >
                비밀번호
              </Label>
              <Input
                className={classes.pwInput}
                id={passwordId}
                placeholder="비밀번호를 입력해주세요"
                useage="pw"
              />
              <Label
                className={classes.repwLabel}
                htmlFor={rePasswordId}
                isEssential="right"
              >
                비밀번호 확인
              </Label>
              <Input
                className={classes.repwInput}
                id={rePasswordId}
                placeholder="비밀번호를 한번 더 입력해주세요"
                useage="repw"
              />
              <Label
                className={classes.nameLabel}
                htmlFor={nameId}
                isEssential="right"
              >
                이름
              </Label>
              <Input
                className={classes.nameInput}
                id={nameId}
                placeholder="이름을 입력해주세요"
                useage="name"
              />
              <Label
                className={classes.emailLabel}
                htmlFor={emailId}
                isEssential="right"
              >
                이메일
              </Label>
              <Input
                className={classes.emailInput}
                id={emailId}
                placeholder="예) marketkarly@karly.com"
                useage="email"
              />
              <Button isSecondary className={classes.emailButton}>
                중복확인
              </Button>
              <Label
                className={classes.phoneLabel}
                htmlFor={phoneId}
                isEssential="right"
              >
                휴대폰
              </Label>
              <Input
                className={classes.phoneInput}
                id={phoneId}
                placeholder="숫자만 입력해주세요"
                useage="phone"
              />
              <Button isSecondary className={classes.phoneButton}>
                인증번호 받기
              </Button>
              <Label
                className={classes.addressLabel}
                htmlFor={addressId}
                isEssential="right"
              >
                주소
              </Label>
              <Button isSecondary className={classes.addressButton}>
                주소 검색
              </Button>
              <Label className={classes.genderLabel} htmlFor={genderId}>
                성별
              </Label>
              <div className={classes.genderWrapper}>
                <Input
                  className={classes.maleInput}
                  id={maleId}
                  name={genderId}
                  useage="gender"
                  value={0}
                />
                <Label
                  data-is-need-curosr-pointer
                  className={classes.maleLabel}
                  htmlFor={maleId}
                >
                  남자
                </Label>
                <Input
                  className={classes.femaleInput}
                  id={femaleId}
                  name={genderId}
                  useage="gender"
                  value={1}
                />
                <Label
                  data-is-need-curosr-pointer
                  className={classes.femaleLabel}
                  htmlFor={femaleId}
                >
                  여자
                </Label>
                <Input
                  className={classes.noneInput}
                  id={noneId}
                  name={genderId}
                  useage="gender"
                  value={2}
                />
                <Label
                  data-is-need-curosr-pointer
                  className={classes.noneLabel}
                  htmlFor={noneId}
                >
                  선택안함
                </Label>
              </div>
              <Label className={classes.birthLabel} htmlFor={birthId}>
                생년월일
              </Label>
              <Input
                className={classes.birthInput}
                id={birthId}
                placeholder="YYYY / MM / DD"
                useage="birth"
              />
              <Label
                className={classes.additionalLabel}
                htmlFor={additionalInputId}
              >
                추가입력 사항
              </Label>
              <div className={classes.additionalWrapper}>
                <Input
                  className={classes.recommendFriendInput}
                  id={recommendFriendId}
                  useage="addition"
                />
                <Label
                  data-is-need-curosr-pointer
                  className={classes.recommendFriendLabel}
                  htmlFor={recommendFriendId}
                >
                  친구초대 추천인 아이디
                </Label>
                <Input
                  className={classes.eventInput}
                  id={eventId}
                  useage="addition"
                />
                <Label
                  data-is-need-curosr-pointer
                  className={classes.eventLabel}
                  htmlFor={eventId}
                >
                  참여 이벤트명
                </Label>
              </div>
            </div>
            <div className={classes.termsWrapper}>
              <Label className={classes.etcLabel} htmlFor={etcId}>
                이용약관동의
              </Label>
              <Input
                data-is-checked-default
                className={classes.etcAllInput}
                id={etcAllId}
                useage="etc"
              />
              <Label
                data-is-need-curosr-pointer
                className={classes.etcAllLabel}
                htmlFor={etcAllId}
              >
                전체 동의합니다.
              </Label>
              <Input
                data-is-checked-default
                className={classes.etcFirstInput}
                id={etcFirstId}
                useage="etc"
              />
              <Label
                data-is-need-curosr-pointer
                className={classes.etcFirstLabel}
                htmlFor={etcFirstId}
              >
                이용약관 동의(필수)
              </Label>
              <IconComponent
                data-is-need-curosr-pointer
                className={classes.etcFirstIcon}
                data-image="Direction=Right"
                dataProps={dataProps}
                onMouseOver={handleExpandTerms}
              >
                약관보기
              </IconComponent>
              <Input
                data-is-checked-default
                className={classes.etcSecondInput}
                id={etcSecondId}
                useage="etc"
              />
              <Label
                data-is-need-curosr-pointer
                className={classes.etcSecondLabel}
                htmlFor={etcSecondId}
              >
                개인정보 수집 · 이용 동의 (필수)
              </Label>
              <IconComponent
                data-is-need-curosr-pointer
                className={classes.etcSecondIcon}
                data-image="Direction=Right"
                dataProps={dataProps}
                onMouseOver={handleExpandTerms}
              >
                약관보기
              </IconComponent>
              <Input
                data-is-checked-default
                className={classes.etcThirdInput}
                id={etcThirdId}
                useage="etc"
              />
              <Label
                data-is-need-curosr-pointer
                className={classes.etcThirdLabel}
                htmlFor={etcThirdId}
              >
                무료배송, 할인쿠폰 등 혜택/정보 수신 동의 (선택)
              </Label>
              <IconComponent
                data-is-need-curosr-pointer
                className={classes.etcThirdIcon}
                data-image="Direction=Right"
                dataProps={dataProps}
                onMouseOver={handleExpandTerms}
              >
                약관보기
              </IconComponent>
              <Input
                data-is-checked-default
                className={classes.etcFourthInput}
                id={etcFourthId}
                useage="etc"
              />
              <Label
                data-is-need-curosr-pointer
                className={classes.etcFourthLabel}
                htmlFor={etcFourthId}
              >
                본인은 만 14세 이상입니다. (필수)
              </Label>
              <IconComponent
                data-is-need-curosr-pointer
                className={classes.etcFourthIcon}
                data-image="Direction=Right"
                dataProps={dataProps}
                onMouseOver={handleExpandTerms}
              >
                약관보기
              </IconComponent>
            </div>
            <Button className={classes.submit}>가입하기</Button>
          </Fieldset>
        </form>
      </div>
    </div>
  );
}
