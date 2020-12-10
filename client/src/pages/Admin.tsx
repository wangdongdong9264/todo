import React from 'react';
import { Input } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import TodoList from '@/components/TodoItem/todoItem'


const { Search } = Input
// export default (): React.ReactNode => (
//   <PageContainer content=" 这个页面只有 admin 权限才能查看">
//     <Search
//       placeholder="input search text"
//       allowClear
//       onSearch={onSearch}
//       style={{ width: 200, margin: '0 10px' }}
//     />
//   </PageContainer>
// );

const Admin : React.FC<{}> = () => {

  const onSearch = (value: string) => {
    if (value === '') {
      return
    }
    console.log(value)
  }
  return (
    <PageContainer content=" 这个页面只有 admin 权限才能查看">
      <Search
        placeholder="请输入代办事项"
        allowClear
        enterButton="添加"
        size="large"
        onSearch={onSearch}
      />
      <TodoList />
    </PageContainer>
  )
}

export default Admin
