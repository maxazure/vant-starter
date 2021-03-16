import request from '@/utils/request'

export function getSwipesForHome() {
  return request({
    url: '/swipes',
    method: 'get'
  })
}

export function getIconsLine() {
  return request({
    url: '/buttons',
    method: 'get'
  })
}

export function getHomeTab() {
  return request({
    url: '/producttablist',
    method: 'get'
  })
}

export function getHomepageList() {
  return request({
    url: '/homepagelist',
    method: 'get'
  })
}