import PropTypes from 'prop-types';

import { useRecoilState } from 'recoil';

import classes from './Input.module.css';
import {
  idState,
  pwState,
  repwState,
  nameState,
  emailState,
  phoneState,
  addressState,
  // genderState,
  birthState,
  additionalState,
  etcState,
} from '@/@store/signUpState';
import { debounce } from '@/util/debounce';

export function Input({
  id: useId,
  useage,
  className,
  placeholder,
  ...restProps
}) {
  const combineClassNames = `${classes.input} ${className}`.trim();

  const [id, setId] = useRecoilState(idState);
  const [pw, setPw] = useRecoilState(pwState);
  const [repw, setRepw] = useRecoilState(repwState);
  const [name, setName] = useRecoilState(nameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [phone, setPhone] = useRecoilState(phoneState);
  const [address, setAddress] = useRecoilState(addressState);
  // const [gender, setGender] = useRecoilState(genderState);
  const [birth, setBirth] = useRecoilState(birthState);
  const [additional, setAdditional] = useRecoilState(additionalState);
  const [etc, setEtc] = useRecoilState(etcState);

  const getType = () => {
    const u = useage;
    if (u === 'id' || u === 'name' || u === 'birth') return 'text';
    if (u === 'pw' || u === 'repw') return 'password';
    if (u === 'name') return 'text';
    if (u === 'email') return 'email';
    if (u === 'phone') return 'tel';
    if (u === 'gender') return 'radio';
    if (u === 'addition' || u === 'etc') return 'checkbox';
  };

  const getValue = () => {
    const u = useage;
    if (u === 'id') return id;
    if (u === 'pw') return pw;
    if (u === 'repw') return repw;
    if (u === 'name') return name;
    if (u === 'email') return email;
    if (u === 'phone') return phone;
    if (u === 'address') return address;
    if (u === 'gender') {
      return '0';
    }
    if (u === 'birth') return birth;
    if (u === 'addition') return additional;
    if (u === 'etc') return etc;
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const u = useage;
    if (u === 'id') {
      setId(e.target.value);
    } else if (u === 'pw') {
      setPw(e.target.value);
    } else if (u === 'repw') {
      setRepw(e.target.value);
    } else if (u === 'name') {
      setName(e.target.value);
    } else if (u === 'email') {
      setEmail(e.target.value);
    } else if (u === 'phone') {
      setPhone(e.target.value);
    } else if (u === 'address') {
      setAddress(e.target.value);
    } else if (u === 'gender') {
      // setGender(e.target.value);
    } else if (u === 'birth') {
      setBirth(e.target.value);
    } else if (u === 'addition') {
      setAdditional(e.target.value);
    } else if (u === 'etc') {
      setEtc(e.target.value);
    }
  };

  // const [isTextInput, setIsTextInput] = useState(true);
  // const [isRadioInput, setIsRadioInput] = useState(false);
  // const [isCheckboxInput, setIsCheckboxInput] = useState(false);

  return (
    <input
      className={combineClassNames}
      id={useId}
      placeholder={placeholder}
      type={getType()}
      value={getValue()}
      onChange={(e) => debounce(handleInputChange(e))}
      {...restProps}
    />
  );
}

/* Props -------------------------------------------------------------------- */

Input.propTypes = {
  useage: PropTypes.oneOf([
    'search',
    'id',
    'pw',
    'repw',
    'name',
    'email',
    'phone',
    'address',
    'gender',
    'birth',
    'addition',
    'etc',
  ]),
};
