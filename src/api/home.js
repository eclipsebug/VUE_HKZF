import axios from '@/utils/request'

// 租房小组

export const getGroups = () =>
  axios({
    url: '/home/groups'
  })
