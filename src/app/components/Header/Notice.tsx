import { Badge, Dropdown, Menu } from 'antd';
import { getNoiceCount } from 'app/api/notice';
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AlertOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types'
import styled from 'styled-components';


export default function Notice({ iconStyle }) {
  
  let navigate = useNavigate();

  const [noticeItems, setNoticeItems] = useState([
    { label: '系统通知', count: 0, key: 'notice' },
    { label: '我的消息', count: 0, key: 'message' },
  ])

  const getNoticies = useCallback(async () => {
    const { data } = await getNoiceCount()
    setNoticeItems(
      noticeItems.map(({ label, key }) => ({ label, key, count: data[key] }))
    )
  }, [noticeItems])


  useEffect(() => {
    getNoticies()
  }, [getNoticies])

  const routeToNotice = () => {
    navigate('/notice');
  }

  const notice = () => (
    <Menu>
      {noticeItems.map(({ label, count }) => (
        <AppMenuItem
          key={label}
          className="flex items-center cursor-pointer"
          onClick={routeToNotice}
        >
          <div className="mr-5 mt-3 leading-3">{label}</div>
          <Badge count={count} offset={[60, -20]} size="small" />
        </AppMenuItem>
      ))}
    </Menu>
  )


  return (
    <Badge dot>
      <Dropdown overlay={notice} trigger={['click']}>
        <AlertOutlined className="cursor-pointer" style={iconStyle} />
      </Dropdown>
    </Badge>
  )
}

const AppMenuItem = styled(Menu.Item)`
  line-height: 12px;
`



Notice.propTypes = {
    iconStyle: PropTypes.objectOf(PropTypes.any),
  }
Notice.defaultProps = {
    iconStyle: {},
}
  