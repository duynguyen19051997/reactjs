export default {
  namespace: 'products',
  state: [
    { name: 'dva', id: 'dva' },
    { name: 'antd', id: 'antd' },
    { name: 'duy', id: 'd1' },
  ],
  reducers: {
    delete(state: any[], { payload: id }: any) {
      return state.filter(item => item.id !== id);
    },
  },
};
