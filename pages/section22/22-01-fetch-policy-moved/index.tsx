import { useQuery, gql } from '@apollo/client'
import {
  type IQuery,
  type IQueryFetchBoardsArgs
} from '../../../src/commons/types/generated/type'

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
    }
  }
`

export default function StaticRoutedPage(): JSX.Element {
  const { data, refetch } = useQuery<
  Pick<IQuery, 'fetchBoards'>,
  IQueryFetchBoardsArgs
  >(FETCH_BOARDS)

  return <div></div>
}
