import BoardWrite from '../../../src/components/units/22-global-state/BoardWrite.container'
import { useRecoilState } from 'recoil'
import { isEditState } from '../../../src/commons/stores'

export default function GlobalStateWithRecoilPage (): JSX.Element {
  // ① return <BoardWrite isEdit={true} />;

  // ② const [isEdit, setIsEdit] = useState(true);
  // return <BoardWrite isEdit={isEdit} />;

  const [, setIsEdit] = useRecoilState(isEditState)
  setIsEdit(false)
  return <BoardWrite />
}
