import request from '@/utils/request'

export function getReports(params) {
  return request({
    url: '/monthly',
    method: 'get',
    params
  })
}

export function getReport(day) {
  return request({
    url: '/reports/' + day,
    method: 'get'
  })
}

export function delReportItemApi(id) {
  return request({
    url: '/report-items/' + id,
    method: 'delete'
  })
}

export function postReport(data) {
  return request({
    url: '/reports',
    method: 'post',
    data
  })
}