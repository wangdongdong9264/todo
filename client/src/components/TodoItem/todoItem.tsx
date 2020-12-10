import React from 'react'
import {
  Radio,
  Button,
} from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'

import styles from './todoItem.less'

// interface  TodoItem {
//   id: string
//   check: boolean
//   content: string
//   onDelete: (todoId: string) => void
//   changeRadio: (value: boolean, id: string) => void
// }

const TodoList: (id, check, content, changeRadio, onDelete) => JSX.Element = (
  id,
  check,
  content,
  changeRadio,
  onDelete
) => {
  let complete = check
  const changeR = () => {
    changeRadio(complete, id)
    complete = !complete
  }
  return (
    <div className={styles.xxx}>
      <Radio value ='complete' onChange={() => changeR()}/>
      <span>{ content }</span>
      <Button shape="circle" icon={<CloseCircleOutlined />} onClick={() => onDelete(id)} />
    </div>
  )
}

export default TodoList
