import { apiInstance } from "./index";

const api = apiInstance();

async function userbooklogList(info, success, fail) {
  await api.get(`/api/v1/booklogs/me`, { params: info }).then(success).catch(fail);
}

export { userbooklogList };
