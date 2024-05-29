import { gql, useQuery } from '@apollo/client'
import { type MouseEvent } from 'react'
import { type IQuery, type IQueryFetchBoardsArgs } from '../../../src/commons/types/generated/type'

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedPage(): JSX.Element {
  const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS)

  const myStyles = {
    margin: '10px'
  }

  const onClickPage = (page: number) => (event: MouseEvent<HTMLSpanElement>): void => {
    void refetch({ page }) // Number(event.currentTarget.id) -> page: page 이며 shorthand property 사용하여 page만 남게된다.
  }

  return (
    <div>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>
          <span style={myStyles}> {el.title}</span>
          <span style={myStyles}> {el.writer}</span>
        </div>
      ))}

      {new Array(10).fill('철수').map((_, index) => (
        <span key={index + 1} onClick={onClickPage(index + 1)}>
          {index + 1}
        </span>
      ))}

    </div>
  )
}
