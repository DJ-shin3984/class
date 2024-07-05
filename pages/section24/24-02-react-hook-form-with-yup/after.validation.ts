import * as yup from 'yup'

export const validation = yup.object({
  // yup.{타입}.{madatory or optional 선택}
  writer: yup.string().required('작성자는 필수값 입니다. 입력하세요'),
  title: yup.string().required('제목은 필수값 입니다. 입력하세요'),
  contents: yup.string().required('내용은 필수값 입니다. 입력하세요'),

  email: yup
    .string()
    .email('이메일 형식에 적합하지 않습니다.')
    .required('이메일은 필수 입력값입니다.'),

  password: yup
    .string()
    .min(4, '비밀번호는 최소 4자리 이상')
    .max(15, '최대15자리')
    .required('비밀번호는 필수 입력값'),

  // 정규 표현식은 matches 사용
  phone: yup
    .string()
    .matches(/^\d{3}-\d{3,4}-\d{4}$/, '휴대폰 형식에 알맞지 않습니다.')
    .required('휴대폰은 필수값 입니다.')
})