import { useQuery, gql } from '@apollo/client'
import {IBoard, IQuery, IQueryFetchBoardsArgs} from '../../../src/commons/types/generated/type'

const FETCH_BOARDS = gql`
    query fetchBoards($page: Int) {
        fetchBoards(page: $page) {
            _id
            writer
            title
            contents
        }
    }
`

export default function StaticRoutedPage(): JSX.Element {
  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>,IQueryFetchBoardsArgs>(FETCH_BOARDS)
  const myStyles = { margin: '10px' }

  const onClickBasket = (basket: IBoard) => (event) => {
    // 1. 기존 저장된 localstorage item 가져오기
    const asIsBasket: IBoard[] = JSON.parse(localStorage.getItem('baskets') ?? '[]')

    const tempBasket = asIsBasket.filter((el) => el._id === basket._id)
    if (tempBasket.length >= 1) {
      alert('이미 담은 물품')
      return
    }

    // 2. 클릭 아이템 추가하기
    asIsBasket.push(basket)

    // 3. 추가된 장바구니 로컬스토리지에 다시 저장 (변경)
    localStorage.setItem('baskets', JSON.stringify(asIsBasket))
  }

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={myStyles}> {el.title}</span>
          <span style={myStyles}> {el.writer}</span>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </div>
      ))}

    </div>
  )
}
