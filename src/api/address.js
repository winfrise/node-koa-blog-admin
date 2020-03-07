const hostname = 'http://localhost:3000'
const address = {
  login: `${hostname}/admin-api/user/login`, // 登录
  logout: `${hostname}/admin-api/user/logout`, // 退出登录
  register: `${hostname}/admin-api/user/register`, // 注册
  getUserInfo: `${hostname}/admin-api/user/info`, // 用户信息
  updateUserInfo: `${hostname}/admin-api/user/update`, // 用户信息
  createArticle: `${hostname}/admin-api/article/create`, // 创建/修改文章
  articleList: `${hostname}/admin-api/article/list`,
  articleDetail: `${hostname}/admin-api/article/detail`,
  sourceList: `${hostname}/admin-api/source/list`,
  uploadFile: `${hostname}/admin-api/upload/singleFile`
}

export default address

